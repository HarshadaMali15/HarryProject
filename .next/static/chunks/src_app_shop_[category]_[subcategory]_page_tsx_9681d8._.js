(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_shop_[category]_[subcategory]_page_tsx_9681d8._.js", {

"[project]/src/app/shop/[category]/[subcategory]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// import { notFound } from "next/navigation";
// import Link from "next/link";
// const getSubcategoryProducts = async (category: string, subcategory: string) => {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/products?category=${category}&subcategory=${subcategory}`
//   );
//   if (!res.ok) return null;
//   return res.json();
// };
// export default async function SubcategoryPage({ params }: { params: { category: string; subcategory: string } }) {
//   const products = await getSubcategoryProducts(params.category, params.subcategory);
//   if (!products) return notFound();
//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4 capitalize">{params.subcategory.replace("-", " ")}</h1>
//       <div className="grid grid-cols-3 gap-4">
//         {products.map((product: any) => (
//           <Link
//             key={product.id}
//             href={`/shop/${params.category}/${params.subcategory}/${product.id}`}
//             className="border rounded-lg p-4 shadow-md hover:shadow-lg transition"
//           >
//             <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-2" />
//             <h2 className="text-lg font-semibold">{product.name}</h2>
//             <p className="text-sm text-gray-500">{product.price}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }
// /app/shop/category/[category]/[subcategory]/page.tsx
__turbopack_esm__({
    "default": (()=>SubcategoryPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
function SubcategoryPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])(); // ✅ TypeScript Fix
    const category = params?.category || "";
    const subcategory = params?.subcategory || "";
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SubcategoryPage.useEffect": ()=>{
            async function fetchProducts() {
                try {
                    // 🔹 Backend से data लाने का placeholder
                    const data = [
                        {
                            id: 1,
                            name: `${subcategory} Product 1`,
                            image: "/sample1.jpg",
                            price: "$60"
                        },
                        {
                            id: 2,
                            name: `${subcategory} Product 2`,
                            image: "/sample2.jpg",
                            price: "$80"
                        }
                    ];
                    setProducts(data);
                } catch (error) {
                    console.error("Error fetching products:", error);
                }
            }
            if (category && subcategory) fetchProducts();
        }
    }["SubcategoryPage.useEffect"], [
        category,
        subcategory
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold",
                children: [
                    "Subcategory: ",
                    subcategory
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/shop/[category]/[subcategory]/page.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 gap-6 mt-6",
                children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border p-4 rounded-md shadow-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: product.image,
                                alt: product.name,
                                className: "w-full h-48 object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/app/shop/[category]/[subcategory]/page.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl mt-2",
                                children: product.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/shop/[category]/[subcategory]/page.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: product.price
                            }, void 0, false, {
                                fileName: "[project]/src/app/shop/[category]/[subcategory]/page.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this)
                        ]
                    }, product.id, true, {
                        fileName: "[project]/src/app/shop/[category]/[subcategory]/page.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/shop/[category]/[subcategory]/page.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/shop/[category]/[subcategory]/page.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s(SubcategoryPage, "135SXecugRpKkWftHHRg4DyJH4s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = SubcategoryPage;
var _c;
__turbopack_refresh__.register(_c, "SubcategoryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/shop/[category]/[subcategory]/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_app_shop_%5Bcategory%5D_%5Bsubcategory%5D_page_tsx_9681d8._.js.map