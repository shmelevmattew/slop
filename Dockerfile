# Timeweb Cloud App Platform (and any Docker host).
# The app has no dependencies — it uses only the Node.js standard library.
FROM node:20-alpine

WORKDIR /app

# Only the app is needed at runtime; the Framer export is not copied.
COPY maridesign-admin/ ./

ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=3000

EXPOSE 3000

# data/ holds the content and the admin credentials (data/admin.json).
# Mount a persistent volume at /app/data so edits survive redeploys.
CMD ["node", "server/index.js"]
