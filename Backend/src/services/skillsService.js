const { getDb } = require('../db/mongoClient');

function normalizeSkillCategory(payload = {}) {
  const normalizedSkills = Array.isArray(payload.skills)
    ? payload.skills
    : typeof payload.skills === 'string'
      ? payload.skills.split(',').map((skill) => skill.trim()).filter(Boolean)
      : [];

  return {
    title: payload.title || 'Untitled Category',
    skills: normalizedSkills,
    updatedAt: new Date()
  };
}

exports.getAll = async () => {
  const db = getDb();
  return db.collection('skills').find().sort({ createdAt: 1 }).toArray();
};

exports.create = async (payload) => {
  const db = getDb();
  const item = {
    id: `${Date.now()}`,
    createdAt: new Date(),
    ...normalizeSkillCategory(payload)
  };
  await db.collection('skills').insertOne(item);
  return item;
};

exports.update = async (id, payload) => {
  const db = getDb();
  await db.collection('skills').updateOne({ id }, { $set: normalizeSkillCategory(payload) });
  return db.collection('skills').findOne({ id });
};

exports.remove = async (id) => {
  const db = getDb();
  const result = await db.collection('skills').deleteOne({ id });
  return result.deletedCount > 0;
};
