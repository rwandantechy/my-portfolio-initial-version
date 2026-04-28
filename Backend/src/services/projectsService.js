const { getDb } = require('../db/mongoClient');

function normalizeProject(payload = {}) {
  return {
    title: payload.title || 'Untitled Project',
    description: payload.description || '',
    featured: Boolean(payload.featured),
    tech: Array.isArray(payload.tech) ? payload.tech : (Array.isArray(payload.tags) ? payload.tags : []),
    metrics: Array.isArray(payload.metrics) ? payload.metrics : [],
    challenges: Array.isArray(payload.challenges) ? payload.challenges : [],
    solutions: Array.isArray(payload.solutions) ? payload.solutions : [],
    results: Array.isArray(payload.results) ? payload.results : [],
    links: payload.links && typeof payload.links === 'object' ? payload.links : {},
    updatedAt: new Date()
  };
}

exports.getAll = async () => {
  const db = getDb();
  const items = await db.collection('projects').find().toArray();
  return items;
};

exports.getById = async (id) => {
  const db = getDb();
  const item = await db.collection('projects').findOne({ id: id });
  return item;
};

exports.create = async (payload) => {
  const db = getDb();
  const newItem = {
    id: `${Date.now()}`,
    createdAt: new Date(),
    ...normalizeProject(payload)
  };
  await db.collection('projects').insertOne(newItem);
  return newItem;
};

exports.update = async (id, payload) => {
  const db = getDb();
  const update = normalizeProject(payload);
  await db.collection('projects').updateOne({ id }, { $set: update });
  return db.collection('projects').findOne({ id });
};

exports.remove = async (id) => {
  const db = getDb();
  const result = await db.collection('projects').deleteOne({ id });
  return result.deletedCount > 0;
};
