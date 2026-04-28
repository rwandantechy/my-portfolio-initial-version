const { getDb } = require('../db/mongoClient');
const logger = require('../utils/logger');
const { defaultProjects, defaultBlogs, defaultSkills } = require('./defaultContent');

async function seedCollectionIfEmpty(collectionName, records) {
  const db = getDb();
  const collection = db.collection(collectionName);
  const count = await collection.countDocuments();

  if (count > 0) return { inserted: 0, skipped: true };

  const now = new Date();
  const documents = records.map((record) => ({
    ...record,
    createdAt: now,
    updatedAt: now,
  }));

  const result = await collection.insertMany(documents);
  return { inserted: result.insertedCount || 0, skipped: false };
}

async function seedDefaultsIfEmpty() {
  const [projects, blogs, skills] = await Promise.all([
    seedCollectionIfEmpty('projects', defaultProjects),
    seedCollectionIfEmpty('blogs', defaultBlogs),
    seedCollectionIfEmpty('skills', defaultSkills),
  ]);

  logger.info(
    `Default content seed status -> projects: ${projects.skipped ? 'skipped' : projects.inserted}, blogs: ${
      blogs.skipped ? 'skipped' : blogs.inserted
    }, skills: ${skills.skipped ? 'skipped' : skills.inserted}`
  );
}

module.exports = {
  seedDefaultsIfEmpty,
};
