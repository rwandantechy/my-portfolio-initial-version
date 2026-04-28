const { getDb } = require('../db/mongoClient');

function normalizeBlog(payload = {}) {
  return {
    title: payload.title || 'Untitled',
    content: payload.content || payload.excerpt || '',
    excerpt: payload.excerpt || '',
    tags: Array.isArray(payload.tags) ? payload.tags : [],
    featured: Boolean(payload.featured),
    readTime: payload.readTime || '',
    updatedAt: new Date()
  };
}

exports.getAll = async () => {
  const db = getDb();
  return await db.collection('blogs').find().sort({ createdAt: -1 }).toArray();
};

exports.getById = async (id) => {
  const db = getDb();
  return await db.collection('blogs').findOne({ id });
};

exports.create = async (payload) => {
  const db = getDb();
  const blogs = db.collection('blogs');
  const newItem = {
    id: `${Date.now()}`,
    authorId: payload.authorId || null,
    createdAt: new Date(),
    ...normalizeBlog(payload)
  };
  await blogs.insertOne(newItem);
  return newItem;
};

exports.update = async (id, payload) => {
  const db = getDb();
  await db.collection('blogs').updateOne({ id }, { $set: normalizeBlog(payload) });
  return db.collection('blogs').findOne({ id });
};

exports.remove = async (id) => {
  const db = getDb();
  const result = await db.collection('blogs').deleteOne({ id });
  return result.deletedCount > 0;
};
