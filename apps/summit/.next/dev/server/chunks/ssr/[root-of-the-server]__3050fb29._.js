module.exports = [
"[project]/apps/summit/app/favicon.ico.mjs { IMAGE => \"[project]/apps/summit/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/summit/app/favicon.ico.mjs { IMAGE => \"[project]/apps/summit/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/apps/summit/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/summit/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/apps/summit/app/investment/[slug]/details/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InvestmentDetailsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
;
const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
const monthData = {
    1: {
        totalInvested: 25000,
        currentValue: 28500,
        return: 3500,
        returnPercentage: 14,
        positions: [
            {
                symbol: 'AAPL',
                name: 'Apple Inc.',
                invested: 5000,
                current: 5850,
                return: 850
            },
            {
                symbol: 'MSFT',
                name: 'Microsoft Corp.',
                invested: 8000,
                current: 9200,
                return: 1200
            },
            {
                symbol: 'GOOGL',
                name: 'Alphabet Inc.',
                invested: 12000,
                current: 13450,
                return: 1450
            }
        ]
    },
    2: {
        totalInvested: 28000,
        currentValue: 31200,
        return: 3200,
        returnPercentage: 11.4,
        positions: [
            {
                symbol: 'AAPL',
                name: 'Apple Inc.',
                invested: 6000,
                current: 6750,
                return: 750
            },
            {
                symbol: 'MSFT',
                name: 'Microsoft Corp.',
                invested: 8000,
                current: 8900,
                return: 900
            },
            {
                symbol: 'TSLA',
                name: 'Tesla Inc.',
                invested: 14000,
                current: 15550,
                return: 1550
            }
        ]
    },
    3: {
        totalInvested: 32000,
        currentValue: 36800,
        return: 4800,
        returnPercentage: 15,
        positions: [
            {
                symbol: 'AAPL',
                name: 'Apple Inc.',
                invested: 6000,
                current: 7200,
                return: 1200
            },
            {
                symbol: 'NVDA',
                name: 'NVIDIA Corp.',
                invested: 10000,
                current: 12500,
                return: 2500
            },
            {
                symbol: 'MSFT',
                name: 'Microsoft Corp.',
                invested: 16000,
                current: 17100,
                return: 1100
            }
        ]
    },
    4: {
        totalInvested: 35000,
        currentValue: 38500,
        return: 3500,
        returnPercentage: 10,
        positions: [
            {
                symbol: 'AAPL',
                name: 'Apple Inc.',
                invested: 7000,
                current: 7500,
                return: 500
            },
            {
                symbol: 'MSFT',
                name: 'Microsoft Corp.',
                invested: 15000,
                current: 16200,
                return: 1200
            },
            {
                symbol: 'AMZN',
                name: 'Amazon.com Inc.',
                invested: 13000,
                current: 14800,
                return: 1800
            }
        ]
    },
    5: {
        totalInvested: 40000,
        currentValue: 43200,
        return: 3200,
        returnPercentage: 8,
        positions: [
            {
                symbol: 'MSFT',
                name: 'Microsoft Corp.',
                invested: 15000,
                current: 16500,
                return: 1500
            },
            {
                symbol: 'NVDA',
                name: 'NVIDIA Corp.',
                invested: 15000,
                current: 16800,
                return: 1800
            },
            {
                symbol: 'AMZN',
                name: 'Amazon.com Inc.',
                invested: 10000,
                current: 9900,
                return: -100
            }
        ]
    },
    6: {
        totalInvested: 42000,
        currentValue: 45600,
        return: 3600,
        returnPercentage: 8.6,
        positions: [
            {
                symbol: 'AAPL',
                name: 'Apple Inc.',
                invested: 8000,
                current: 8800,
                return: 800
            },
            {
                symbol: 'MSFT',
                name: 'Microsoft Corp.',
                invested: 16000,
                current: 17600,
                return: 1600
            },
            {
                symbol: 'GOOGL',
                name: 'Alphabet Inc.',
                invested: 18000,
                current: 19200,
                return: 1200
            }
        ]
    },
    7: {
        totalInvested: 45000,
        currentValue: 49500,
        return: 4500,
        returnPercentage: 10,
        positions: [
            {
                symbol: 'AAPL',
                name: 'Apple Inc.',
                invested: 8000,
                current: 9200,
                return: 1200
            },
            {
                symbol: 'MSFT',
                name: 'Microsoft Corp.',
                invested: 17000,
                current: 19200,
                return: 2200
            },
            {
                symbol: 'AMZN',
                name: 'Amazon.com Inc.',
                invested: 20000,
                current: 21100,
                return: 1100
            }
        ]
    },
    8: {
        totalInvested: 48000,
        currentValue: 51200,
        return: 3200,
        returnPercentage: 6.7,
        positions: [
            {
                symbol: 'AAPL',
                name: 'Apple Inc.',
                invested: 9000,
                current: 9500,
                return: 500
            },
            {
                symbol: 'MSFT',
                name: 'Microsoft Corp.',
                invested: 18000,
                current: 19200,
                return: 1200
            },
            {
                symbol: 'NVDA',
                name: 'NVIDIA Corp.',
                invested: 21000,
                current: 22500,
                return: 1500
            }
        ]
    },
    9: {
        totalInvested: 50000,
        currentValue: 54000,
        return: 4000,
        returnPercentage: 8,
        positions: [
            {
                symbol: 'MSFT',
                name: 'Microsoft Corp.',
                invested: 18000,
                current: 19800,
                return: 1800
            },
            {
                symbol: 'AAPL',
                name: 'Apple Inc.',
                invested: 9000,
                current: 9900,
                return: 900
            },
            {
                symbol: 'GOOGL',
                name: 'Alphabet Inc.',
                invested: 23000,
                current: 24300,
                return: 1300
            }
        ]
    },
    10: {
        totalInvested: 52000,
        currentValue: 56800,
        return: 4800,
        returnPercentage: 9.2,
        positions: [
            {
                symbol: 'AAPL',
                name: 'Apple Inc.',
                invested: 10000,
                current: 11200,
                return: 1200
            },
            {
                symbol: 'MSFT',
                name: 'Microsoft Corp.',
                invested: 20000,
                current: 22000,
                return: 2000
            },
            {
                symbol: 'AMZN',
                name: 'Amazon.com Inc.',
                invested: 22000,
                current: 23600,
                return: 1600
            }
        ]
    },
    11: {
        totalInvested: 55000,
        currentValue: 60500,
        return: 5500,
        returnPercentage: 10,
        positions: [
            {
                symbol: 'AAPL',
                name: 'Apple Inc.',
                invested: 10000,
                current: 11500,
                return: 1500
            },
            {
                symbol: 'NVDA',
                name: 'NVIDIA Corp.',
                invested: 20000,
                current: 23000,
                return: 3000
            },
            {
                symbol: 'MSFT',
                name: 'Microsoft Corp.',
                invested: 25000,
                current: 26000,
                return: 1000
            }
        ]
    },
    12: {
        totalInvested: 58000,
        currentValue: 64500,
        return: 6500,
        returnPercentage: 11.2,
        positions: [
            {
                symbol: 'AAPL',
                name: 'Apple Inc.',
                invested: 11000,
                current: 12500,
                return: 1500
            },
            {
                symbol: 'MSFT',
                name: 'Microsoft Corp.',
                invested: 25000,
                current: 27500,
                return: 2500
            },
            {
                symbol: 'GOOGL',
                name: 'Alphabet Inc.',
                invested: 22000,
                current: 24500,
                return: 2500
            }
        ]
    }
};
async function InvestmentDetailsPage({ params }) {
    const { slug } = await params;
    const monthNumber = parseInt(slug);
    // Validate month number (1-12)
    if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const data = monthData[monthNumber];
    const monthName = monthNames[monthNumber - 1];
    if (!data) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-50 to-slate-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/investment",
                            className: "text-indigo-600 hover:text-indigo-700 font-medium mb-4 inline-block",
                            children: "← Back to Investments"
                        }, void 0, false, {
                            fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                            lineNumber: 182,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-slate-900 mb-2",
                            children: [
                                monthName,
                                " 2024 Investment Details"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-slate-600",
                            children: "Detailed breakdown of your monthly investments"
                        }, void 0, false, {
                            fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                    lineNumber: 181,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg shadow p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-medium text-gray-600 mb-2",
                                    children: "Total Invested"
                                }, void 0, false, {
                                    fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-3xl font-bold text-indigo-600",
                                    children: [
                                        "$",
                                        data.totalInvested.toLocaleString()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg shadow p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-medium text-gray-600 mb-2",
                                    children: "Current Value"
                                }, void 0, false, {
                                    fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-3xl font-bold text-blue-600",
                                    children: [
                                        "$",
                                        data.currentValue.toLocaleString()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg shadow p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-medium text-gray-600 mb-2",
                                    children: "Gain/Loss"
                                }, void 0, false, {
                                    fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-3xl font-bold text-green-600",
                                    children: [
                                        "+$",
                                        Math.abs(data.return).toLocaleString()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                            lineNumber: 206,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg shadow p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-medium text-gray-600 mb-2",
                                    children: "Return %"
                                }, void 0, false, {
                                    fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                                    lineNumber: 214,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-3xl font-bold text-purple-600",
                                    children: [
                                        "+",
                                        data.returnPercentage,
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                                    lineNumber: 215,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                            lineNumber: 213,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                    lineNumber: 195,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 border-b border-gray-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-gray-900",
                                children: "Investment Positions"
                            }, void 0, false, {
                                fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                                lineNumber: 222,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                            lineNumber: 221,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        className: "bg-gray-50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                    children: "Symbol"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                    children: "Company Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                    children: "Amount Invested"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                    children: "Current Value"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                    children: "Gain/Loss"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                    children: "Return %"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                                            lineNumber: 227,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                                        lineNumber: 226,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        className: "divide-y divide-gray-200",
                                        children: data.positions.map((position)=>{
                                            const returnPercent = (position.return / position.invested * 100).toFixed(2);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "hover:bg-gray-50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 text-sm font-semibold text-gray-900",
                                                        children: position.symbol
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 text-sm text-gray-600",
                                                        children: position.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                                                        lineNumber: 242,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 text-sm text-gray-900",
                                                        children: [
                                                            "$",
                                                            position.invested.toLocaleString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 text-sm font-semibold text-gray-900",
                                                        children: [
                                                            "$",
                                                            position.current.toLocaleString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                                                        lineNumber: 244,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: `px-6 py-4 text-sm font-semibold ${position.return >= 0 ? 'text-green-600' : 'text-red-600'}`,
                                                        children: [
                                                            position.return >= 0 ? '+' : '',
                                                            " $",
                                                            position.return.toLocaleString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: `px-6 py-4 text-sm font-semibold ${parseFloat(returnPercent) >= 0 ? 'text-green-600' : 'text-red-600'}`,
                                                        children: [
                                                            parseFloat(returnPercent) >= 0 ? '+' : '',
                                                            returnPercent,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, position.symbol, true, {
                                                fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                                                lineNumber: 240,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                                        lineNumber: 236,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                                lineNumber: 225,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                            lineNumber: 224,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                    lineNumber: 220,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: monthNumber > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/investment/${monthNumber - 1}/details`,
                                className: "px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors",
                                children: "← Previous Month"
                            }, void 0, false, {
                                fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                                lineNumber: 263,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                            lineNumber: 261,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-gray-600",
                            children: [
                                "Month ",
                                monthNumber,
                                " of 12"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                            lineNumber: 272,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: monthNumber < 12 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/investment/${monthNumber + 1}/details`,
                                className: "px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors",
                                children: "Next Month →"
                            }, void 0, false, {
                                fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                                lineNumber: 278,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                            lineNumber: 276,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
                    lineNumber: 260,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
            lineNumber: 180,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/summit/app/investment/[slug]/details/page.tsx",
        lineNumber: 179,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/summit/app/investment/[slug]/details/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/summit/app/investment/[slug]/details/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3050fb29._.js.map