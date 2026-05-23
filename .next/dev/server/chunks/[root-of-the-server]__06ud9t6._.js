module.exports = [
"[externals]/next/dist/compiled/@vercel/og/index.node.js [external] (next/dist/compiled/@vercel/og/index.node.js, esm_import, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/[externals]_next_dist_compiled_@vercel_og_index_node_00__rw~.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[externals]/next/dist/compiled/@vercel/og/index.node.js [external] (next/dist/compiled/@vercel/og/index.node.js, esm_import)");
    });
});
}),
"[project]/app/icon--route-entry.js [app-route] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.resolve().then(() => {
        return parentImport("[project]/app/icon--route-entry.js [app-route] (ecmascript)");
    });
});
}),
];