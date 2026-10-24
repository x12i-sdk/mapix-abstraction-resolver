import assert from 'node:assert/strict';
// An authored structural profile isolates proposal behavior from the profiler defect
// documented in https://github.com/x12i-sdk/mapix-mongo-profiler.
const profile = {
  profileId: 'fixture-profile', runId: 'demo-run', sourceId: 'fixture-source',
  dbName: 'fixture-db', collectionName: 'assets', dataRoot: 'data',
  sampledRecordCount: 2, sampleStrategy: 'first_n', hasDataObject: true, dataPresenceRatio: 1,
  fieldCount: 2, fields: ['id', 'name'].map(path => ({
    path, normalizedPath: path, valueType: 'string', presenceRatio: 1, nullRatio: 0, emptyRatio: 0,
    uniqueRatio: 1, samplePatterns: [], semanticHints: [], idLike: path === 'id', dateLike: false,
    stateLike: false, displayLike: path === 'name', relationCandidate: false, sensitive: false,
    confidence: 'high', evidence: ['Authored synthetic fixture'],
  })),
  candidateIdentityFields: [{ path: 'id', confidence: 'high', evidence: ['Fixture identity'], score: 1 }],
  candidateDateFields: [], candidateStateFields: [], candidateDisplayFields: [], candidateRelationFields: [],
  profileFingerprint: 'authored-fixture', warnings: [], createdAt: '2026-01-01T00:00:00.000Z',
};
import { buildProposal } from '@x12i/mapix-proposal-builder';
const proposal = buildProposal({ runId: 'demo-run', profiles: [profile], relationCandidates: [], createdBy: 'example' });
import { resolveLens } from '@x12i/mapix-abstraction-resolver';
assert(proposal.abstractTypes.length > 0);
const result = resolveLens({ abstractType: proposal.abstractTypes[0].abstractType, mode: 'draft', explain: true }, proposal);
assert.equal(result.success, true, JSON.stringify(result));
assert.equal(result.concreteEntityName, proposal.objectTypes[0].entityName);
assert(result.steps.length > 0);
console.log(result);
