(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/59749_jiti_dist_jiti_ab9897f6.js", {

"[project]/node_modules/tailwindcss/node_modules/jiti/dist/jiti.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
(()=>{
    var __webpack_modules__ = {
        "./node_modules/.pnpm/create-require@1.1.1/node_modules/create-require/create-require.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const nativeModule = __webpack_require__("module"), path = __webpack_require__("path"), fs = __webpack_require__("fs");
            module1.exports = function(filename) {
                return filename || (filename = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cwd()), function(path) {
                    try {
                        return fs.lstatSync(path).isDirectory();
                    } catch (e) {
                        return !1;
                    }
                }(filename) && (filename = path.join(filename, "index.js")), nativeModule.createRequire ? nativeModule.createRequire(filename) : nativeModule.createRequireFromPath ? nativeModule.createRequireFromPath(filename) : function(filename) {
                    const mod = new nativeModule.Module(filename, null);
                    return mod.filename = filename, mod.paths = nativeModule.Module._nodeModulePaths(path.dirname(filename)), mod._compile("module.exports = require;", filename), mod.exports;
                }(filename);
            };
        },
        "./node_modules/.pnpm/mlly@1.7.3/node_modules/mlly/dist lazy recursive": (module1)=>{
            function webpackEmptyAsyncContext(req) {
                return Promise.resolve().then(()=>{
                    var e = new Error("Cannot find module '" + req + "'");
                    throw e.code = "MODULE_NOT_FOUND", e;
                });
            }
            webpackEmptyAsyncContext.keys = ()=>[], webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext, webpackEmptyAsyncContext.id = "./node_modules/.pnpm/mlly@1.7.3/node_modules/mlly/dist lazy recursive", module1.exports = webpackEmptyAsyncContext;
        },
        "./node_modules/.pnpm/object-hash@3.0.0/node_modules/object-hash/index.js": (module1, exports, __webpack_require__)=>{
            "use strict";
            var crypto = __webpack_require__("crypto");
            function objectHash(object, options) {
                return function(object, options) {
                    var hashingStream;
                    hashingStream = "passthrough" !== options.algorithm ? crypto.createHash(options.algorithm) : new PassThrough;
                    void 0 === hashingStream.write && (hashingStream.write = hashingStream.update, hashingStream.end = hashingStream.update);
                    var hasher = typeHasher(options, hashingStream);
                    hasher.dispatch(object), hashingStream.update || hashingStream.end("");
                    if (hashingStream.digest) return hashingStream.digest("buffer" === options.encoding ? void 0 : options.encoding);
                    var buf = hashingStream.read();
                    if ("buffer" === options.encoding) return buf;
                    return buf.toString(options.encoding);
                }(object, options = applyDefaults(object, options));
            }
            (exports = module1.exports = objectHash).sha1 = function(object) {
                return objectHash(object);
            }, exports.keys = function(object) {
                return objectHash(object, {
                    excludeValues: !0,
                    algorithm: "sha1",
                    encoding: "hex"
                });
            }, exports.MD5 = function(object) {
                return objectHash(object, {
                    algorithm: "md5",
                    encoding: "hex"
                });
            }, exports.keysMD5 = function(object) {
                return objectHash(object, {
                    algorithm: "md5",
                    encoding: "hex",
                    excludeValues: !0
                });
            };
            var hashes = crypto.getHashes ? crypto.getHashes().slice() : [
                "sha1",
                "md5"
            ];
            hashes.push("passthrough");
            var encodings = [
                "buffer",
                "hex",
                "binary",
                "base64"
            ];
            function applyDefaults(object, sourceOptions) {
                sourceOptions = sourceOptions || {};
                var options = {};
                if (options.algorithm = sourceOptions.algorithm || "sha1", options.encoding = sourceOptions.encoding || "hex", options.excludeValues = !!sourceOptions.excludeValues, options.algorithm = options.algorithm.toLowerCase(), options.encoding = options.encoding.toLowerCase(), options.ignoreUnknown = !0 === sourceOptions.ignoreUnknown, options.respectType = !1 !== sourceOptions.respectType, options.respectFunctionNames = !1 !== sourceOptions.respectFunctionNames, options.respectFunctionProperties = !1 !== sourceOptions.respectFunctionProperties, options.unorderedArrays = !0 === sourceOptions.unorderedArrays, options.unorderedSets = !1 !== sourceOptions.unorderedSets, options.unorderedObjects = !1 !== sourceOptions.unorderedObjects, options.replacer = sourceOptions.replacer || void 0, options.excludeKeys = sourceOptions.excludeKeys || void 0, void 0 === object) throw new Error("Object argument required.");
                for(var i = 0; i < hashes.length; ++i)hashes[i].toLowerCase() === options.algorithm.toLowerCase() && (options.algorithm = hashes[i]);
                if (-1 === hashes.indexOf(options.algorithm)) throw new Error('Algorithm "' + options.algorithm + '"  not supported. supported values: ' + hashes.join(", "));
                if (-1 === encodings.indexOf(options.encoding) && "passthrough" !== options.algorithm) throw new Error('Encoding "' + options.encoding + '"  not supported. supported values: ' + encodings.join(", "));
                return options;
            }
            function isNativeFunction(f) {
                if ("function" != typeof f) return !1;
                return null != /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(f));
            }
            function typeHasher(options, writeTo, context) {
                context = context || [];
                var write = function(str) {
                    return writeTo.update ? writeTo.update(str, "utf8") : writeTo.write(str, "utf8");
                };
                return {
                    dispatch: function(value) {
                        options.replacer && (value = options.replacer(value));
                        var type = typeof value;
                        return null === value && (type = "null"), this["_" + type](value);
                    },
                    _object: function(object) {
                        var objString = Object.prototype.toString.call(object), objType = /\[object (.*)\]/i.exec(objString);
                        objType = (objType = objType ? objType[1] : "unknown:[" + objString + "]").toLowerCase();
                        var objectNumber;
                        if ((objectNumber = context.indexOf(object)) >= 0) return this.dispatch("[CIRCULAR:" + objectNumber + "]");
                        if (context.push(object), "undefined" != typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].isBuffer && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].isBuffer(object)) return write("buffer:"), write(object);
                        if ("object" === objType || "function" === objType || "asyncfunction" === objType) {
                            var keys = Object.keys(object);
                            options.unorderedObjects && (keys = keys.sort()), !1 === options.respectType || isNativeFunction(object) || keys.splice(0, 0, "prototype", "__proto__", "constructor"), options.excludeKeys && (keys = keys.filter(function(key) {
                                return !options.excludeKeys(key);
                            })), write("object:" + keys.length + ":");
                            var self = this;
                            return keys.forEach(function(key) {
                                self.dispatch(key), write(":"), options.excludeValues || self.dispatch(object[key]), write(",");
                            });
                        }
                        if (!this["_" + objType]) {
                            if (options.ignoreUnknown) return write("[" + objType + "]");
                            throw new Error('Unknown object type "' + objType + '"');
                        }
                        this["_" + objType](object);
                    },
                    _array: function(arr, unordered) {
                        unordered = void 0 !== unordered ? unordered : !1 !== options.unorderedArrays;
                        var self = this;
                        if (write("array:" + arr.length + ":"), !unordered || arr.length <= 1) return arr.forEach(function(entry) {
                            return self.dispatch(entry);
                        });
                        var contextAdditions = [], entries = arr.map(function(entry) {
                            var strm = new PassThrough, localContext = context.slice();
                            return typeHasher(options, strm, localContext).dispatch(entry), contextAdditions = contextAdditions.concat(localContext.slice(context.length)), strm.read().toString();
                        });
                        return context = context.concat(contextAdditions), entries.sort(), this._array(entries, !1);
                    },
                    _date: function(date) {
                        return write("date:" + date.toJSON());
                    },
                    _symbol: function(sym) {
                        return write("symbol:" + sym.toString());
                    },
                    _error: function(err) {
                        return write("error:" + err.toString());
                    },
                    _boolean: function(bool) {
                        return write("bool:" + bool.toString());
                    },
                    _string: function(string) {
                        write("string:" + string.length + ":"), write(string.toString());
                    },
                    _function: function(fn) {
                        write("fn:"), isNativeFunction(fn) ? this.dispatch("[native]") : this.dispatch(fn.toString()), !1 !== options.respectFunctionNames && this.dispatch("function-name:" + String(fn.name)), options.respectFunctionProperties && this._object(fn);
                    },
                    _number: function(number) {
                        return write("number:" + number.toString());
                    },
                    _xml: function(xml) {
                        return write("xml:" + xml.toString());
                    },
                    _null: function() {
                        return write("Null");
                    },
                    _undefined: function() {
                        return write("Undefined");
                    },
                    _regexp: function(regex) {
                        return write("regex:" + regex.toString());
                    },
                    _uint8array: function(arr) {
                        return write("uint8array:"), this.dispatch(Array.prototype.slice.call(arr));
                    },
                    _uint8clampedarray: function(arr) {
                        return write("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(arr));
                    },
                    _int8array: function(arr) {
                        return write("int8array:"), this.dispatch(Array.prototype.slice.call(arr));
                    },
                    _uint16array: function(arr) {
                        return write("uint16array:"), this.dispatch(Array.prototype.slice.call(arr));
                    },
                    _int16array: function(arr) {
                        return write("int16array:"), this.dispatch(Array.prototype.slice.call(arr));
                    },
                    _uint32array: function(arr) {
                        return write("uint32array:"), this.dispatch(Array.prototype.slice.call(arr));
                    },
                    _int32array: function(arr) {
                        return write("int32array:"), this.dispatch(Array.prototype.slice.call(arr));
                    },
                    _float32array: function(arr) {
                        return write("float32array:"), this.dispatch(Array.prototype.slice.call(arr));
                    },
                    _float64array: function(arr) {
                        return write("float64array:"), this.dispatch(Array.prototype.slice.call(arr));
                    },
                    _arraybuffer: function(arr) {
                        return write("arraybuffer:"), this.dispatch(new Uint8Array(arr));
                    },
                    _url: function(url) {
                        return write("url:" + url.toString());
                    },
                    _map: function(map) {
                        write("map:");
                        var arr = Array.from(map);
                        return this._array(arr, !1 !== options.unorderedSets);
                    },
                    _set: function(set) {
                        write("set:");
                        var arr = Array.from(set);
                        return this._array(arr, !1 !== options.unorderedSets);
                    },
                    _file: function(file) {
                        return write("file:"), this.dispatch([
                            file.name,
                            file.size,
                            file.type,
                            file.lastModfied
                        ]);
                    },
                    _blob: function() {
                        if (options.ignoreUnknown) return write("[blob]");
                        throw Error('Hashing Blob objects is currently not supported\n(see https://github.com/puleos/object-hash/issues/26)\nUse "options.replacer" or "options.ignoreUnknown"\n');
                    },
                    _domwindow: function() {
                        return write("domwindow");
                    },
                    _bigint: function(number) {
                        return write("bigint:" + number.toString());
                    },
                    _process: function() {
                        return write("process");
                    },
                    _timer: function() {
                        return write("timer");
                    },
                    _pipe: function() {
                        return write("pipe");
                    },
                    _tcp: function() {
                        return write("tcp");
                    },
                    _udp: function() {
                        return write("udp");
                    },
                    _tty: function() {
                        return write("tty");
                    },
                    _statwatcher: function() {
                        return write("statwatcher");
                    },
                    _securecontext: function() {
                        return write("securecontext");
                    },
                    _connection: function() {
                        return write("connection");
                    },
                    _zlib: function() {
                        return write("zlib");
                    },
                    _context: function() {
                        return write("context");
                    },
                    _nodescript: function() {
                        return write("nodescript");
                    },
                    _httpparser: function() {
                        return write("httpparser");
                    },
                    _dataview: function() {
                        return write("dataview");
                    },
                    _signal: function() {
                        return write("signal");
                    },
                    _fsevent: function() {
                        return write("fsevent");
                    },
                    _tlswrap: function() {
                        return write("tlswrap");
                    }
                };
            }
            function PassThrough() {
                return {
                    buf: "",
                    write: function(b) {
                        this.buf += b;
                    },
                    end: function(b) {
                        this.buf += b;
                    },
                    read: function() {
                        return this.buf;
                    }
                };
            }
            exports.writeToStream = function(object, options, stream) {
                return void 0 === stream && (stream = options, options = {}), typeHasher(options = applyDefaults(object, options), stream).dispatch(object);
            };
        },
        "./node_modules/.pnpm/pirates@4.0.6/node_modules/pirates/lib/index.js": (module1, exports, __webpack_require__)=>{
            "use strict";
            module1 = __webpack_require__.nmd(module1), Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.addHook = function(hook, opts = {}) {
                let reverted = !1;
                const loaders = [], oldLoaders = [];
                let exts;
                const originalJSLoader = Module._extensions[".js"], matcher = opts.matcher || null, ignoreNodeModules = !1 !== opts.ignoreNodeModules;
                exts = opts.extensions || opts.exts || opts.extension || opts.ext || [
                    ".js"
                ], Array.isArray(exts) || (exts = [
                    exts
                ]);
                return exts.forEach((ext)=>{
                    if ("string" != typeof ext) throw new TypeError(`Invalid Extension: ${ext}`);
                    const oldLoader = Module._extensions[ext] || originalJSLoader;
                    oldLoaders[ext] = Module._extensions[ext], loaders[ext] = Module._extensions[ext] = function(mod, filename) {
                        let compile;
                        reverted || function(filename, exts, matcher, ignoreNodeModules) {
                            if ("string" != typeof filename) return !1;
                            if (-1 === exts.indexOf(_path.default.extname(filename))) return !1;
                            const resolvedFilename = _path.default.resolve(filename);
                            if (ignoreNodeModules && nodeModulesRegex.test(resolvedFilename)) return !1;
                            if (matcher && "function" == typeof matcher) return !!matcher(resolvedFilename);
                            return !0;
                        }(filename, exts, matcher, ignoreNodeModules) && (compile = mod._compile, mod._compile = function(code) {
                            mod._compile = compile;
                            const newCode = hook(code, filename);
                            if ("string" != typeof newCode) throw new Error(HOOK_RETURNED_NOTHING_ERROR_MESSAGE);
                            return mod._compile(newCode, filename);
                        }), oldLoader(mod, filename);
                    };
                }), function() {
                    reverted || (reverted = !0, exts.forEach((ext)=>{
                        Module._extensions[ext] === loaders[ext] && (oldLoaders[ext] ? Module._extensions[ext] = oldLoaders[ext] : delete Module._extensions[ext]);
                    }));
                };
            };
            var _module = _interopRequireDefault(__webpack_require__("module")), _path = _interopRequireDefault(__webpack_require__("path"));
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            const nodeModulesRegex = /^(?:.*[\\/])?node_modules(?:[\\/].*)?$/, Module = module1.constructor.length > 1 ? module1.constructor : _module.default, HOOK_RETURNED_NOTHING_ERROR_MESSAGE = "[Pirates] A hook returned a non-string, or nothing at all! This is a violation of intergalactic law!\n--------------------\nIf you have no idea what this means or what Pirates is, let me explain: Pirates is a module that makes is easy to implement require hooks. One of the require hooks you're using uses it. One of these require hooks didn't return anything from it's handler, so we don't know what to do. You might want to debug this.";
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/classes/comparator.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const ANY = Symbol("SemVer ANY");
            class Comparator {
                static get ANY() {
                    return ANY;
                }
                constructor(comp, options){
                    if (options = parseOptions(options), comp instanceof Comparator) {
                        if (comp.loose === !!options.loose) return comp;
                        comp = comp.value;
                    }
                    comp = comp.trim().split(/\s+/).join(" "), debug("comparator", comp, options), this.options = options, this.loose = !!options.loose, this.parse(comp), this.semver === ANY ? this.value = "" : this.value = this.operator + this.semver.version, debug("comp", this);
                }
                parse(comp) {
                    const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR], m = comp.match(r);
                    if (!m) throw new TypeError(`Invalid comparator: ${comp}`);
                    this.operator = void 0 !== m[1] ? m[1] : "", "=" === this.operator && (this.operator = ""), m[2] ? this.semver = new SemVer(m[2], this.options.loose) : this.semver = ANY;
                }
                toString() {
                    return this.value;
                }
                test(version) {
                    if (debug("Comparator.test", version, this.options.loose), this.semver === ANY || version === ANY) return !0;
                    if ("string" == typeof version) try {
                        version = new SemVer(version, this.options);
                    } catch (er) {
                        return !1;
                    }
                    return cmp(version, this.operator, this.semver, this.options);
                }
                intersects(comp, options) {
                    if (!(comp instanceof Comparator)) throw new TypeError("a Comparator is required");
                    return "" === this.operator ? "" === this.value || new Range(comp.value, options).test(this.value) : "" === comp.operator ? "" === comp.value || new Range(this.value, options).test(comp.semver) : (!(options = parseOptions(options)).includePrerelease || "<0.0.0-0" !== this.value && "<0.0.0-0" !== comp.value) && !(!options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) && (!(!this.operator.startsWith(">") || !comp.operator.startsWith(">")) || !(!this.operator.startsWith("<") || !comp.operator.startsWith("<")) || !(this.semver.version !== comp.semver.version || !this.operator.includes("=") || !comp.operator.includes("=")) || !!(cmp(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<")) || !!(cmp(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")));
                }
            }
            module1.exports = Comparator;
            const parseOptions = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/internal/parse-options.js"), { safeRe: re, t } = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/internal/re.js"), cmp = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/cmp.js"), debug = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/internal/debug.js"), SemVer = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/classes/semver.js"), Range = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/classes/range.js");
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/classes/range.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const SPACE_CHARACTERS = /\s+/g;
            class Range {
                constructor(range, options){
                    if (options = parseOptions(options), range instanceof Range) return range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease ? range : new Range(range.raw, options);
                    if (range instanceof Comparator) return this.raw = range.value, this.set = [
                        [
                            range
                        ]
                    ], this.formatted = void 0, this;
                    if (this.options = options, this.loose = !!options.loose, this.includePrerelease = !!options.includePrerelease, this.raw = range.trim().replace(SPACE_CHARACTERS, " "), this.set = this.raw.split("||").map((r)=>this.parseRange(r.trim())).filter((c)=>c.length), !this.set.length) throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
                    if (this.set.length > 1) {
                        const first = this.set[0];
                        if (this.set = this.set.filter((c)=>!isNullSet(c[0])), 0 === this.set.length) this.set = [
                            first
                        ];
                        else if (this.set.length > 1) {
                            for (const c of this.set)if (1 === c.length && isAny(c[0])) {
                                this.set = [
                                    c
                                ];
                                break;
                            }
                        }
                    }
                    this.formatted = void 0;
                }
                get range() {
                    if (void 0 === this.formatted) {
                        this.formatted = "";
                        for(let i = 0; i < this.set.length; i++){
                            i > 0 && (this.formatted += "||");
                            const comps = this.set[i];
                            for(let k = 0; k < comps.length; k++)k > 0 && (this.formatted += " "), this.formatted += comps[k].toString().trim();
                        }
                    }
                    return this.formatted;
                }
                format() {
                    return this.range;
                }
                toString() {
                    return this.range;
                }
                parseRange(range) {
                    const memoKey = ((this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE)) + ":" + range, cached = cache.get(memoKey);
                    if (cached) return cached;
                    const loose = this.options.loose, hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
                    range = range.replace(hr, hyphenReplace(this.options.includePrerelease)), debug("hyphen replace", range), range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace), debug("comparator trim", range), range = range.replace(re[t.TILDETRIM], tildeTrimReplace), debug("tilde trim", range), range = range.replace(re[t.CARETTRIM], caretTrimReplace), debug("caret trim", range);
                    let rangeList = range.split(" ").map((comp)=>parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp)=>replaceGTE0(comp, this.options));
                    loose && (rangeList = rangeList.filter((comp)=>(debug("loose invalid filter", comp, this.options), !!comp.match(re[t.COMPARATORLOOSE])))), debug("range list", rangeList);
                    const rangeMap = new Map, comparators = rangeList.map((comp)=>new Comparator(comp, this.options));
                    for (const comp of comparators){
                        if (isNullSet(comp)) return [
                            comp
                        ];
                        rangeMap.set(comp.value, comp);
                    }
                    rangeMap.size > 1 && rangeMap.has("") && rangeMap.delete("");
                    const result = [
                        ...rangeMap.values()
                    ];
                    return cache.set(memoKey, result), result;
                }
                intersects(range, options) {
                    if (!(range instanceof Range)) throw new TypeError("a Range is required");
                    return this.set.some((thisComparators)=>isSatisfiable(thisComparators, options) && range.set.some((rangeComparators)=>isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator)=>rangeComparators.every((rangeComparator)=>thisComparator.intersects(rangeComparator, options)))));
                }
                test(version) {
                    if (!version) return !1;
                    if ("string" == typeof version) try {
                        version = new SemVer(version, this.options);
                    } catch (er) {
                        return !1;
                    }
                    for(let i = 0; i < this.set.length; i++)if (testSet(this.set[i], version, this.options)) return !0;
                    return !1;
                }
            }
            module1.exports = Range;
            const cache = new (__webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/internal/lrucache.js")), parseOptions = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/internal/parse-options.js"), Comparator = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/classes/comparator.js"), debug = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/internal/debug.js"), SemVer = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/classes/semver.js"), { safeRe: re, t, comparatorTrimReplace, tildeTrimReplace, caretTrimReplace } = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/internal/re.js"), { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/internal/constants.js"), isNullSet = (c)=>"<0.0.0-0" === c.value, isAny = (c)=>"" === c.value, isSatisfiable = (comparators, options)=>{
                let result = !0;
                const remainingComparators = comparators.slice();
                let testComparator = remainingComparators.pop();
                for(; result && remainingComparators.length;)result = remainingComparators.every((otherComparator)=>testComparator.intersects(otherComparator, options)), testComparator = remainingComparators.pop();
                return result;
            }, parseComparator = (comp, options)=>(debug("comp", comp, options), comp = replaceCarets(comp, options), debug("caret", comp), comp = replaceTildes(comp, options), debug("tildes", comp), comp = replaceXRanges(comp, options), debug("xrange", comp), comp = replaceStars(comp, options), debug("stars", comp), comp), isX = (id)=>!id || "x" === id.toLowerCase() || "*" === id, replaceTildes = (comp, options)=>comp.trim().split(/\s+/).map((c)=>replaceTilde(c, options)).join(" "), replaceTilde = (comp, options)=>{
                const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
                return comp.replace(r, (_, M, m, p, pr)=>{
                    let ret;
                    return debug("tilde", comp, _, M, m, p, pr), isX(M) ? ret = "" : isX(m) ? ret = `>=${M}.0.0 <${+M + 1}.0.0-0` : isX(p) ? ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0` : pr ? (debug("replaceTilde pr", pr), ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`) : ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`, debug("tilde return", ret), ret;
                });
            }, replaceCarets = (comp, options)=>comp.trim().split(/\s+/).map((c)=>replaceCaret(c, options)).join(" "), replaceCaret = (comp, options)=>{
                debug("caret", comp, options);
                const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET], z = options.includePrerelease ? "-0" : "";
                return comp.replace(r, (_, M, m, p, pr)=>{
                    let ret;
                    return debug("caret", comp, _, M, m, p, pr), isX(M) ? ret = "" : isX(m) ? ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0` : isX(p) ? ret = "0" === M ? `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0` : `>=${M}.${m}.0${z} <${+M + 1}.0.0-0` : pr ? (debug("replaceCaret pr", pr), ret = "0" === M ? "0" === m ? `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0` : `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0` : `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`) : (debug("no pr"), ret = "0" === M ? "0" === m ? `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0` : `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0` : `>=${M}.${m}.${p} <${+M + 1}.0.0-0`), debug("caret return", ret), ret;
                });
            }, replaceXRanges = (comp, options)=>(debug("replaceXRanges", comp, options), comp.split(/\s+/).map((c)=>replaceXRange(c, options)).join(" ")), replaceXRange = (comp, options)=>{
                comp = comp.trim();
                const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
                return comp.replace(r, (ret, gtlt, M, m, p, pr)=>{
                    debug("xRange", comp, ret, gtlt, M, m, p, pr);
                    const xM = isX(M), xm = xM || isX(m), xp = xm || isX(p), anyX = xp;
                    return "=" === gtlt && anyX && (gtlt = ""), pr = options.includePrerelease ? "-0" : "", xM ? ret = ">" === gtlt || "<" === gtlt ? "<0.0.0-0" : "*" : gtlt && anyX ? (xm && (m = 0), p = 0, ">" === gtlt ? (gtlt = ">=", xm ? (M = +M + 1, m = 0, p = 0) : (m = +m + 1, p = 0)) : "<=" === gtlt && (gtlt = "<", xm ? M = +M + 1 : m = +m + 1), "<" === gtlt && (pr = "-0"), ret = `${gtlt + M}.${m}.${p}${pr}`) : xm ? ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0` : xp && (ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`), debug("xRange return", ret), ret;
                });
            }, replaceStars = (comp, options)=>(debug("replaceStars", comp, options), comp.trim().replace(re[t.STAR], "")), replaceGTE0 = (comp, options)=>(debug("replaceGTE0", comp, options), comp.trim().replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], "")), hyphenReplace = (incPr)=>($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr)=>`${from = isX(fM) ? "" : isX(fm) ? `>=${fM}.0.0${incPr ? "-0" : ""}` : isX(fp) ? `>=${fM}.${fm}.0${incPr ? "-0" : ""}` : fpr ? `>=${from}` : `>=${from}${incPr ? "-0" : ""}`} ${to = isX(tM) ? "" : isX(tm) ? `<${+tM + 1}.0.0-0` : isX(tp) ? `<${tM}.${+tm + 1}.0-0` : tpr ? `<=${tM}.${tm}.${tp}-${tpr}` : incPr ? `<${tM}.${tm}.${+tp + 1}-0` : `<=${to}`}`.trim(), testSet = (set, version, options)=>{
                for(let i = 0; i < set.length; i++)if (!set[i].test(version)) return !1;
                if (version.prerelease.length && !options.includePrerelease) {
                    for(let i = 0; i < set.length; i++)if (debug(set[i].semver), set[i].semver !== Comparator.ANY && set[i].semver.prerelease.length > 0) {
                        const allowed = set[i].semver;
                        if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) return !0;
                    }
                    return !1;
                }
                return !0;
            };
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/classes/semver.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const debug = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/internal/debug.js"), { MAX_LENGTH, MAX_SAFE_INTEGER } = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/internal/constants.js"), { safeRe: re, t } = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/internal/re.js"), parseOptions = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/internal/parse-options.js"), { compareIdentifiers } = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/internal/identifiers.js");
            class SemVer {
                constructor(version, options){
                    if (options = parseOptions(options), version instanceof SemVer) {
                        if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) return version;
                        version = version.version;
                    } else if ("string" != typeof version) throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
                    if (version.length > MAX_LENGTH) throw new TypeError(`version is longer than ${MAX_LENGTH} characters`);
                    debug("SemVer", version, options), this.options = options, this.loose = !!options.loose, this.includePrerelease = !!options.includePrerelease;
                    const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
                    if (!m) throw new TypeError(`Invalid Version: ${version}`);
                    if (this.raw = version, this.major = +m[1], this.minor = +m[2], this.patch = +m[3], this.major > MAX_SAFE_INTEGER || this.major < 0) throw new TypeError("Invalid major version");
                    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) throw new TypeError("Invalid minor version");
                    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) throw new TypeError("Invalid patch version");
                    m[4] ? this.prerelease = m[4].split(".").map((id)=>{
                        if (/^[0-9]+$/.test(id)) {
                            const num = +id;
                            if (num >= 0 && num < MAX_SAFE_INTEGER) return num;
                        }
                        return id;
                    }) : this.prerelease = [], this.build = m[5] ? m[5].split(".") : [], this.format();
                }
                format() {
                    return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
                }
                toString() {
                    return this.version;
                }
                compare(other) {
                    if (debug("SemVer.compare", this.version, this.options, other), !(other instanceof SemVer)) {
                        if ("string" == typeof other && other === this.version) return 0;
                        other = new SemVer(other, this.options);
                    }
                    return other.version === this.version ? 0 : this.compareMain(other) || this.comparePre(other);
                }
                compareMain(other) {
                    return other instanceof SemVer || (other = new SemVer(other, this.options)), compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
                }
                comparePre(other) {
                    if (other instanceof SemVer || (other = new SemVer(other, this.options)), this.prerelease.length && !other.prerelease.length) return -1;
                    if (!this.prerelease.length && other.prerelease.length) return 1;
                    if (!this.prerelease.length && !other.prerelease.length) return 0;
                    let i = 0;
                    do {
                        const a = this.prerelease[i], b = other.prerelease[i];
                        if (debug("prerelease compare", i, a, b), void 0 === a && void 0 === b) return 0;
                        if (void 0 === b) return 1;
                        if (void 0 === a) return -1;
                        if (a !== b) return compareIdentifiers(a, b);
                    }while (++i)
                }
                compareBuild(other) {
                    other instanceof SemVer || (other = new SemVer(other, this.options));
                    let i = 0;
                    do {
                        const a = this.build[i], b = other.build[i];
                        if (debug("build compare", i, a, b), void 0 === a && void 0 === b) return 0;
                        if (void 0 === b) return 1;
                        if (void 0 === a) return -1;
                        if (a !== b) return compareIdentifiers(a, b);
                    }while (++i)
                }
                inc(release, identifier, identifierBase) {
                    switch(release){
                        case "premajor":
                            this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", identifier, identifierBase);
                            break;
                        case "preminor":
                            this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", identifier, identifierBase);
                            break;
                        case "prepatch":
                            this.prerelease.length = 0, this.inc("patch", identifier, identifierBase), this.inc("pre", identifier, identifierBase);
                            break;
                        case "prerelease":
                            0 === this.prerelease.length && this.inc("patch", identifier, identifierBase), this.inc("pre", identifier, identifierBase);
                            break;
                        case "major":
                            0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length || this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                            break;
                        case "minor":
                            0 === this.patch && 0 !== this.prerelease.length || this.minor++, this.patch = 0, this.prerelease = [];
                            break;
                        case "patch":
                            0 === this.prerelease.length && this.patch++, this.prerelease = [];
                            break;
                        case "pre":
                            {
                                const base = Number(identifierBase) ? 1 : 0;
                                if (!identifier && !1 === identifierBase) throw new Error("invalid increment argument: identifier is empty");
                                if (0 === this.prerelease.length) this.prerelease = [
                                    base
                                ];
                                else {
                                    let i = this.prerelease.length;
                                    for(; --i >= 0;)"number" == typeof this.prerelease[i] && (this.prerelease[i]++, i = -2);
                                    if (-1 === i) {
                                        if (identifier === this.prerelease.join(".") && !1 === identifierBase) throw new Error("invalid increment argument: identifier already exists");
                                        this.prerelease.push(base);
                                    }
                                }
                                if (identifier) {
                                    let prerelease = [
                                        identifier,
                                        base
                                    ];
                                    !1 === identifierBase && (prerelease = [
                                        identifier
                                    ]), 0 === compareIdentifiers(this.prerelease[0], identifier) ? isNaN(this.prerelease[1]) && (this.prerelease = prerelease) : this.prerelease = prerelease;
                                }
                                break;
                            }
                        default:
                            throw new Error(`invalid increment argument: ${release}`);
                    }
                    return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
                }
            }
            module1.exports = SemVer;
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/clean.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const parse = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/parse.js");
            module1.exports = (version, options)=>{
                const s = parse(version.trim().replace(/^[=v]+/, ""), options);
                return s ? s.version : null;
            };
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/cmp.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const eq = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/eq.js"), neq = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/neq.js"), gt = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/gt.js"), gte = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/gte.js"), lt = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/lt.js"), lte = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/lte.js");
            module1.exports = (a, op, b, loose)=>{
                switch(op){
                    case "===":
                        return "object" == typeof a && (a = a.version), "object" == typeof b && (b = b.version), a === b;
                    case "!==":
                        return "object" == typeof a && (a = a.version), "object" == typeof b && (b = b.version), a !== b;
                    case "":
                    case "=":
                    case "==":
                        return eq(a, b, loose);
                    case "!=":
                        return neq(a, b, loose);
                    case ">":
                        return gt(a, b, loose);
                    case ">=":
                        return gte(a, b, loose);
                    case "<":
                        return lt(a, b, loose);
                    case "<=":
                        return lte(a, b, loose);
                    default:
                        throw new TypeError(`Invalid operator: ${op}`);
                }
            };
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/coerce.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const SemVer = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/classes/semver.js"), parse = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/parse.js"), { safeRe: re, t } = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/internal/re.js");
            module1.exports = (version, options)=>{
                if (version instanceof SemVer) return version;
                if ("number" == typeof version && (version = String(version)), "string" != typeof version) return null;
                let match = null;
                if ((options = options || {}).rtl) {
                    const coerceRtlRegex = options.includePrerelease ? re[t.COERCERTLFULL] : re[t.COERCERTL];
                    let next;
                    for(; (next = coerceRtlRegex.exec(version)) && (!match || match.index + match[0].length !== version.length);)match && next.index + next[0].length === match.index + match[0].length || (match = next), coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
                    coerceRtlRegex.lastIndex = -1;
                } else match = version.match(options.includePrerelease ? re[t.COERCEFULL] : re[t.COERCE]);
                if (null === match) return null;
                const major = match[2], minor = match[3] || "0", patch = match[4] || "0", prerelease = options.includePrerelease && match[5] ? `-${match[5]}` : "", build = options.includePrerelease && match[6] ? `+${match[6]}` : "";
                return parse(`${major}.${minor}.${patch}${prerelease}${build}`, options);
            };
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/compare-build.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const SemVer = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/classes/semver.js");
            module1.exports = (a, b, loose)=>{
                const versionA = new SemVer(a, loose), versionB = new SemVer(b, loose);
                return versionA.compare(versionB) || versionA.compareBuild(versionB);
            };
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/compare-loose.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const compare = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/compare.js");
            module1.exports = (a, b)=>compare(a, b, !0);
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/compare.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const SemVer = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/classes/semver.js");
            module1.exports = (a, b, loose)=>new SemVer(a, loose).compare(new SemVer(b, loose));
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/diff.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const parse = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/parse.js");
            module1.exports = (version1, version2)=>{
                const v1 = parse(version1, null, !0), v2 = parse(version2, null, !0), comparison = v1.compare(v2);
                if (0 === comparison) return null;
                const v1Higher = comparison > 0, highVersion = v1Higher ? v1 : v2, lowVersion = v1Higher ? v2 : v1, highHasPre = !!highVersion.prerelease.length;
                if (!!lowVersion.prerelease.length && !highHasPre) return lowVersion.patch || lowVersion.minor ? highVersion.patch ? "patch" : highVersion.minor ? "minor" : "major" : "major";
                const prefix = highHasPre ? "pre" : "";
                return v1.major !== v2.major ? prefix + "major" : v1.minor !== v2.minor ? prefix + "minor" : v1.patch !== v2.patch ? prefix + "patch" : "prerelease";
            };
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/eq.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const compare = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/compare.js");
            module1.exports = (a, b, loose)=>0 === compare(a, b, loose);
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/gt.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const compare = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/compare.js");
            module1.exports = (a, b, loose)=>compare(a, b, loose) > 0;
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/gte.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const compare = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/compare.js");
            module1.exports = (a, b, loose)=>compare(a, b, loose) >= 0;
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/inc.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const SemVer = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/classes/semver.js");
            module1.exports = (version, release, options, identifier, identifierBase)=>{
                "string" == typeof options && (identifierBase = identifier, identifier = options, options = void 0);
                try {
                    return new SemVer(version instanceof SemVer ? version.version : version, options).inc(release, identifier, identifierBase).version;
                } catch (er) {
                    return null;
                }
            };
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/lt.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const compare = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/compare.js");
            module1.exports = (a, b, loose)=>compare(a, b, loose) < 0;
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/lte.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const compare = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/compare.js");
            module1.exports = (a, b, loose)=>compare(a, b, loose) <= 0;
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/major.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const SemVer = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/classes/semver.js");
            module1.exports = (a, loose)=>new SemVer(a, loose).major;
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/minor.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const SemVer = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/classes/semver.js");
            module1.exports = (a, loose)=>new SemVer(a, loose).minor;
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/neq.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const compare = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/compare.js");
            module1.exports = (a, b, loose)=>0 !== compare(a, b, loose);
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/parse.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const SemVer = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/classes/semver.js");
            module1.exports = (version, options, throwErrors = !1)=>{
                if (version instanceof SemVer) return version;
                try {
                    return new SemVer(version, options);
                } catch (er) {
                    if (!throwErrors) return null;
                    throw er;
                }
            };
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/patch.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const SemVer = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/classes/semver.js");
            module1.exports = (a, loose)=>new SemVer(a, loose).patch;
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/prerelease.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const parse = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/parse.js");
            module1.exports = (version, options)=>{
                const parsed = parse(version, options);
                return parsed && parsed.prerelease.length ? parsed.prerelease : null;
            };
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/rcompare.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const compare = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/compare.js");
            module1.exports = (a, b, loose)=>compare(b, a, loose);
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/rsort.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const compareBuild = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/compare-build.js");
            module1.exports = (list, loose)=>list.sort((a, b)=>compareBuild(b, a, loose));
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/satisfies.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const Range = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/classes/range.js");
            module1.exports = (version, range, options)=>{
                try {
                    range = new Range(range, options);
                } catch (er) {
                    return !1;
                }
                return range.test(version);
            };
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/sort.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const compareBuild = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/compare-build.js");
            module1.exports = (list, loose)=>list.sort((a, b)=>compareBuild(a, b, loose));
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/valid.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const parse = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/parse.js");
            module1.exports = (version, options)=>{
                const v = parse(version, options);
                return v ? v.version : null;
            };
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/index.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const internalRe = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/internal/re.js"), constants = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/internal/constants.js"), SemVer = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/classes/semver.js"), identifiers = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/internal/identifiers.js"), parse = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/parse.js"), valid = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/valid.js"), clean = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/clean.js"), inc = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/inc.js"), diff = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/diff.js"), major = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/major.js"), minor = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/minor.js"), patch = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/patch.js"), prerelease = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/prerelease.js"), compare = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/compare.js"), rcompare = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/rcompare.js"), compareLoose = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/compare-loose.js"), compareBuild = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/compare-build.js"), sort = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/sort.js"), rsort = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/rsort.js"), gt = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/gt.js"), lt = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/lt.js"), eq = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/eq.js"), neq = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/neq.js"), gte = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/gte.js"), lte = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/lte.js"), cmp = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/cmp.js"), coerce = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/coerce.js"), Comparator = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/classes/comparator.js"), Range = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/classes/range.js"), satisfies = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/satisfies.js"), toComparators = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/ranges/to-comparators.js"), maxSatisfying = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/ranges/max-satisfying.js"), minSatisfying = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/ranges/min-satisfying.js"), minVersion = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/ranges/min-version.js"), validRange = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/ranges/valid.js"), outside = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/ranges/outside.js"), gtr = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/ranges/gtr.js"), ltr = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/ranges/ltr.js"), intersects = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/ranges/intersects.js"), simplifyRange = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/ranges/simplify.js"), subset = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/ranges/subset.js");
            module1.exports = {
                parse,
                valid,
                clean,
                inc,
                diff,
                major,
                minor,
                patch,
                prerelease,
                compare,
                rcompare,
                compareLoose,
                compareBuild,
                sort,
                rsort,
                gt,
                lt,
                eq,
                neq,
                gte,
                lte,
                cmp,
                coerce,
                Comparator,
                Range,
                satisfies,
                toComparators,
                maxSatisfying,
                minSatisfying,
                minVersion,
                validRange,
                outside,
                gtr,
                ltr,
                intersects,
                simplifyRange,
                subset,
                SemVer,
                re: internalRe.re,
                src: internalRe.src,
                tokens: internalRe.t,
                SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
                RELEASE_TYPES: constants.RELEASE_TYPES,
                compareIdentifiers: identifiers.compareIdentifiers,
                rcompareIdentifiers: identifiers.rcompareIdentifiers
            };
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/internal/constants.js": (module1)=>{
            const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
            module1.exports = {
                MAX_LENGTH: 256,
                MAX_SAFE_COMPONENT_LENGTH: 16,
                MAX_SAFE_BUILD_LENGTH: 250,
                MAX_SAFE_INTEGER,
                RELEASE_TYPES: [
                    "major",
                    "premajor",
                    "minor",
                    "preminor",
                    "patch",
                    "prepatch",
                    "prerelease"
                ],
                SEMVER_SPEC_VERSION: "2.0.0",
                FLAG_INCLUDE_PRERELEASE: 1,
                FLAG_LOOSE: 2
            };
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/internal/debug.js": (module1)=>{
            const debug = "object" == typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NODE_DEBUG && /\bsemver\b/i.test(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NODE_DEBUG) ? (...args)=>console.error("SEMVER", ...args) : ()=>{};
            module1.exports = debug;
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/internal/identifiers.js": (module1)=>{
            const numeric = /^[0-9]+$/, compareIdentifiers = (a, b)=>{
                const anum = numeric.test(a), bnum = numeric.test(b);
                return anum && bnum && (a = +a, b = +b), a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
            };
            module1.exports = {
                compareIdentifiers,
                rcompareIdentifiers: (a, b)=>compareIdentifiers(b, a)
            };
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/internal/lrucache.js": (module1)=>{
            module1.exports = class {
                constructor(){
                    this.max = 1e3, this.map = new Map;
                }
                get(key) {
                    const value = this.map.get(key);
                    return void 0 === value ? void 0 : (this.map.delete(key), this.map.set(key, value), value);
                }
                delete(key) {
                    return this.map.delete(key);
                }
                set(key, value) {
                    if (!this.delete(key) && void 0 !== value) {
                        if (this.map.size >= this.max) {
                            const firstKey = this.map.keys().next().value;
                            this.delete(firstKey);
                        }
                        this.map.set(key, value);
                    }
                    return this;
                }
            };
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/internal/parse-options.js": (module1)=>{
            const looseOption = Object.freeze({
                loose: !0
            }), emptyOpts = Object.freeze({});
            module1.exports = (options)=>options ? "object" != typeof options ? looseOption : options : emptyOpts;
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/internal/re.js": (module1, exports, __webpack_require__)=>{
            const { MAX_SAFE_COMPONENT_LENGTH, MAX_SAFE_BUILD_LENGTH, MAX_LENGTH } = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/internal/constants.js"), debug = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/internal/debug.js"), re = (exports = module1.exports = {}).re = [], safeRe = exports.safeRe = [], src = exports.src = [], t = exports.t = {};
            let R = 0;
            const safeRegexReplacements = [
                [
                    "\\s",
                    1
                ],
                [
                    "\\d",
                    MAX_LENGTH
                ],
                [
                    "[a-zA-Z0-9-]",
                    MAX_SAFE_BUILD_LENGTH
                ]
            ], createToken = (name, value, isGlobal)=>{
                const safe = ((value)=>{
                    for (const [token, max] of safeRegexReplacements)value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
                    return value;
                })(value), index = R++;
                debug(name, index, value), t[name] = index, src[index] = value, re[index] = new RegExp(value, isGlobal ? "g" : void 0), safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
            };
            createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*"), createToken("NUMERICIDENTIFIERLOOSE", "\\d+"), createToken("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), createToken("MAINVERSION", `(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})`), createToken("MAINVERSIONLOOSE", `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})`), createToken("PRERELEASEIDENTIFIER", `(?:${src[t.NUMERICIDENTIFIER]}|${src[t.NONNUMERICIDENTIFIER]})`), createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t.NUMERICIDENTIFIERLOOSE]}|${src[t.NONNUMERICIDENTIFIER]})`), createToken("PRERELEASE", `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`), createToken("PRERELEASELOOSE", `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`), createToken("BUILDIDENTIFIER", "[a-zA-Z0-9-]+"), createToken("BUILD", `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`), createToken("FULLPLAIN", `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`), createToken("FULL", `^${src[t.FULLPLAIN]}$`), createToken("LOOSEPLAIN", `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`), createToken("LOOSE", `^${src[t.LOOSEPLAIN]}$`), createToken("GTLT", "((?:<|>)?=?)"), createToken("XRANGEIDENTIFIERLOOSE", `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), createToken("XRANGEIDENTIFIER", `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`), createToken("XRANGEPLAIN", `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?)?)?`), createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?)?)?`), createToken("XRANGE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`), createToken("XRANGELOOSE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`), createToken("COERCEPLAIN", `(^|[^\\d])(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`), createToken("COERCE", `${src[t.COERCEPLAIN]}(?:$|[^\\d])`), createToken("COERCEFULL", src[t.COERCEPLAIN] + `(?:${src[t.PRERELEASE]})?` + `(?:${src[t.BUILD]})?(?:$|[^\\d])`), createToken("COERCERTL", src[t.COERCE], !0), createToken("COERCERTLFULL", src[t.COERCEFULL], !0), createToken("LONETILDE", "(?:~>?)"), createToken("TILDETRIM", `(\\s*)${src[t.LONETILDE]}\\s+`, !0), exports.tildeTrimReplace = "$1~", createToken("TILDE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`), createToken("TILDELOOSE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`), createToken("LONECARET", "(?:\\^)"), createToken("CARETTRIM", `(\\s*)${src[t.LONECARET]}\\s+`, !0), exports.caretTrimReplace = "$1^", createToken("CARET", `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`), createToken("CARETLOOSE", `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`), createToken("COMPARATORLOOSE", `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`), createToken("COMPARATOR", `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`), createToken("COMPARATORTRIM", `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, !0), exports.comparatorTrimReplace = "$1$2$3", createToken("HYPHENRANGE", `^\\s*(${src[t.XRANGEPLAIN]})\\s+-\\s+(${src[t.XRANGEPLAIN]})\\s*$`), createToken("HYPHENRANGELOOSE", `^\\s*(${src[t.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t.XRANGEPLAINLOOSE]})\\s*$`), createToken("STAR", "(<|>)?=?\\s*\\*"), createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/ranges/gtr.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const outside = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/ranges/outside.js");
            module1.exports = (version, range, options)=>outside(version, range, ">", options);
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/ranges/intersects.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const Range = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/classes/range.js");
            module1.exports = (r1, r2, options)=>(r1 = new Range(r1, options), r2 = new Range(r2, options), r1.intersects(r2, options));
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/ranges/ltr.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const outside = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/ranges/outside.js");
            module1.exports = (version, range, options)=>outside(version, range, "<", options);
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/ranges/max-satisfying.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const SemVer = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/classes/semver.js"), Range = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/classes/range.js");
            module1.exports = (versions, range, options)=>{
                let max = null, maxSV = null, rangeObj = null;
                try {
                    rangeObj = new Range(range, options);
                } catch (er) {
                    return null;
                }
                return versions.forEach((v)=>{
                    rangeObj.test(v) && (max && -1 !== maxSV.compare(v) || (max = v, maxSV = new SemVer(max, options)));
                }), max;
            };
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/ranges/min-satisfying.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const SemVer = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/classes/semver.js"), Range = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/classes/range.js");
            module1.exports = (versions, range, options)=>{
                let min = null, minSV = null, rangeObj = null;
                try {
                    rangeObj = new Range(range, options);
                } catch (er) {
                    return null;
                }
                return versions.forEach((v)=>{
                    rangeObj.test(v) && (min && 1 !== minSV.compare(v) || (min = v, minSV = new SemVer(min, options)));
                }), min;
            };
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/ranges/min-version.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const SemVer = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/classes/semver.js"), Range = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/classes/range.js"), gt = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/gt.js");
            module1.exports = (range, loose)=>{
                range = new Range(range, loose);
                let minver = new SemVer("0.0.0");
                if (range.test(minver)) return minver;
                if (minver = new SemVer("0.0.0-0"), range.test(minver)) return minver;
                minver = null;
                for(let i = 0; i < range.set.length; ++i){
                    const comparators = range.set[i];
                    let setMin = null;
                    comparators.forEach((comparator)=>{
                        const compver = new SemVer(comparator.semver.version);
                        switch(comparator.operator){
                            case ">":
                                0 === compver.prerelease.length ? compver.patch++ : compver.prerelease.push(0), compver.raw = compver.format();
                            case "":
                            case ">=":
                                setMin && !gt(compver, setMin) || (setMin = compver);
                                break;
                            case "<":
                            case "<=":
                                break;
                            default:
                                throw new Error(`Unexpected operation: ${comparator.operator}`);
                        }
                    }), !setMin || minver && !gt(minver, setMin) || (minver = setMin);
                }
                return minver && range.test(minver) ? minver : null;
            };
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/ranges/outside.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const SemVer = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/classes/semver.js"), Comparator = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/classes/comparator.js"), { ANY } = Comparator, Range = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/classes/range.js"), satisfies = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/satisfies.js"), gt = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/gt.js"), lt = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/lt.js"), lte = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/lte.js"), gte = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/gte.js");
            module1.exports = (version, range, hilo, options)=>{
                let gtfn, ltefn, ltfn, comp, ecomp;
                switch(version = new SemVer(version, options), range = new Range(range, options), hilo){
                    case ">":
                        gtfn = gt, ltefn = lte, ltfn = lt, comp = ">", ecomp = ">=";
                        break;
                    case "<":
                        gtfn = lt, ltefn = gte, ltfn = gt, comp = "<", ecomp = "<=";
                        break;
                    default:
                        throw new TypeError('Must provide a hilo val of "<" or ">"');
                }
                if (satisfies(version, range, options)) return !1;
                for(let i = 0; i < range.set.length; ++i){
                    const comparators = range.set[i];
                    let high = null, low = null;
                    if (comparators.forEach((comparator)=>{
                        comparator.semver === ANY && (comparator = new Comparator(">=0.0.0")), high = high || comparator, low = low || comparator, gtfn(comparator.semver, high.semver, options) ? high = comparator : ltfn(comparator.semver, low.semver, options) && (low = comparator);
                    }), high.operator === comp || high.operator === ecomp) return !1;
                    if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) return !1;
                    if (low.operator === ecomp && ltfn(version, low.semver)) return !1;
                }
                return !0;
            };
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/ranges/simplify.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const satisfies = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/satisfies.js"), compare = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/compare.js");
            module1.exports = (versions, range, options)=>{
                const set = [];
                let first = null, prev = null;
                const v = versions.sort((a, b)=>compare(a, b, options));
                for (const version of v){
                    satisfies(version, range, options) ? (prev = version, first || (first = version)) : (prev && set.push([
                        first,
                        prev
                    ]), prev = null, first = null);
                }
                first && set.push([
                    first,
                    null
                ]);
                const ranges = [];
                for (const [min, max] of set)min === max ? ranges.push(min) : max || min !== v[0] ? max ? min === v[0] ? ranges.push(`<=${max}`) : ranges.push(`${min} - ${max}`) : ranges.push(`>=${min}`) : ranges.push("*");
                const simplified = ranges.join(" || "), original = "string" == typeof range.raw ? range.raw : String(range);
                return simplified.length < original.length ? simplified : range;
            };
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/ranges/subset.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const Range = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/classes/range.js"), Comparator = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/classes/comparator.js"), { ANY } = Comparator, satisfies = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/satisfies.js"), compare = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/functions/compare.js"), minimumVersionWithPreRelease = [
                new Comparator(">=0.0.0-0")
            ], minimumVersion = [
                new Comparator(">=0.0.0")
            ], simpleSubset = (sub, dom, options)=>{
                if (sub === dom) return !0;
                if (1 === sub.length && sub[0].semver === ANY) {
                    if (1 === dom.length && dom[0].semver === ANY) return !0;
                    sub = options.includePrerelease ? minimumVersionWithPreRelease : minimumVersion;
                }
                if (1 === dom.length && dom[0].semver === ANY) {
                    if (options.includePrerelease) return !0;
                    dom = minimumVersion;
                }
                const eqSet = new Set;
                let gt, lt, gtltComp, higher, lower, hasDomLT, hasDomGT;
                for (const c of sub)">" === c.operator || ">=" === c.operator ? gt = higherGT(gt, c, options) : "<" === c.operator || "<=" === c.operator ? lt = lowerLT(lt, c, options) : eqSet.add(c.semver);
                if (eqSet.size > 1) return null;
                if (gt && lt) {
                    if (gtltComp = compare(gt.semver, lt.semver, options), gtltComp > 0) return null;
                    if (0 === gtltComp && (">=" !== gt.operator || "<=" !== lt.operator)) return null;
                }
                for (const eq of eqSet){
                    if (gt && !satisfies(eq, String(gt), options)) return null;
                    if (lt && !satisfies(eq, String(lt), options)) return null;
                    for (const c of dom)if (!satisfies(eq, String(c), options)) return !1;
                    return !0;
                }
                let needDomLTPre = !(!lt || options.includePrerelease || !lt.semver.prerelease.length) && lt.semver, needDomGTPre = !(!gt || options.includePrerelease || !gt.semver.prerelease.length) && gt.semver;
                needDomLTPre && 1 === needDomLTPre.prerelease.length && "<" === lt.operator && 0 === needDomLTPre.prerelease[0] && (needDomLTPre = !1);
                for (const c of dom){
                    if (hasDomGT = hasDomGT || ">" === c.operator || ">=" === c.operator, hasDomLT = hasDomLT || "<" === c.operator || "<=" === c.operator, gt) {
                        if (needDomGTPre && c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch && (needDomGTPre = !1), ">" === c.operator || ">=" === c.operator) {
                            if (higher = higherGT(gt, c, options), higher === c && higher !== gt) return !1;
                        } else if (">=" === gt.operator && !satisfies(gt.semver, String(c), options)) return !1;
                    }
                    if (lt) {
                        if (needDomLTPre && c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch && (needDomLTPre = !1), "<" === c.operator || "<=" === c.operator) {
                            if (lower = lowerLT(lt, c, options), lower === c && lower !== lt) return !1;
                        } else if ("<=" === lt.operator && !satisfies(lt.semver, String(c), options)) return !1;
                    }
                    if (!c.operator && (lt || gt) && 0 !== gtltComp) return !1;
                }
                return !(gt && hasDomLT && !lt && 0 !== gtltComp) && !(lt && hasDomGT && !gt && 0 !== gtltComp) && !needDomGTPre && !needDomLTPre;
            }, higherGT = (a, b, options)=>{
                if (!a) return b;
                const comp = compare(a.semver, b.semver, options);
                return comp > 0 ? a : comp < 0 || ">" === b.operator && ">=" === a.operator ? b : a;
            }, lowerLT = (a, b, options)=>{
                if (!a) return b;
                const comp = compare(a.semver, b.semver, options);
                return comp < 0 ? a : comp > 0 || "<" === b.operator && "<=" === a.operator ? b : a;
            };
            module1.exports = (sub, dom, options = {})=>{
                if (sub === dom) return !0;
                sub = new Range(sub, options), dom = new Range(dom, options);
                let sawNonNull = !1;
                OUTER: for (const simpleSub of sub.set){
                    for (const simpleDom of dom.set){
                        const isSub = simpleSubset(simpleSub, simpleDom, options);
                        if (sawNonNull = sawNonNull || null !== isSub, isSub) continue OUTER;
                    }
                    if (sawNonNull) return !1;
                }
                return !0;
            };
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/ranges/to-comparators.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const Range = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/classes/range.js");
            module1.exports = (range, options)=>new Range(range, options).set.map((comp)=>comp.map((c)=>c.value).join(" ").trim().split(" "));
        },
        "./node_modules/.pnpm/semver@7.6.3/node_modules/semver/ranges/valid.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            const Range = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/classes/range.js");
            module1.exports = (range, options)=>{
                try {
                    return new Range(range, options).range || "*";
                } catch (er) {
                    return null;
                }
            };
        },
        crypto: (module1)=>{
            "use strict";
            module1.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/crypto-browserify/index.js [app-client] (ecmascript)");
        },
        fs: (module1)=>{
            "use strict";
            module1.exports = (()=>{
                const e = new Error("Cannot find module 'fs'");
                e.code = 'MODULE_NOT_FOUND';
                throw e;
            })();
        },
        module: (module1)=>{
            "use strict";
            module1.exports = (()=>{
                const e = new Error("Cannot find module 'module'");
                e.code = 'MODULE_NOT_FOUND';
                throw e;
            })();
        },
        path: (module1)=>{
            "use strict";
            module1.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/path-browserify/index.js [app-client] (ecmascript)");
        }
    }, __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (void 0 !== cachedModule) return cachedModule.exports;
        var module1 = __webpack_module_cache__[moduleId] = {
            id: moduleId,
            loaded: !1,
            exports: {}
        };
        return __webpack_modules__[moduleId](module1, module1.exports, __webpack_require__), module1.loaded = !0, module1.exports;
    }
    __webpack_require__.n = (module1)=>{
        var getter = module1 && module1.__esModule ? ()=>module1.default : ()=>module1;
        return __webpack_require__.d(getter, {
            a: getter
        }), getter;
    }, __webpack_require__.d = (exports, definition)=>{
        for(var key in definition)__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key) && Object.defineProperty(exports, key, {
            enumerable: !0,
            get: definition[key]
        });
    }, __webpack_require__.o = (obj, prop)=>Object.prototype.hasOwnProperty.call(obj, prop), __webpack_require__.nmd = (module1)=>(module1.paths = [], module1.children || (module1.children = []), module1);
    var __webpack_exports__ = {};
    (()=>{
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: ()=>createJITI
        });
        var external_fs_ = __webpack_require__("fs"), external_module_ = __webpack_require__("module");
        const external_perf_hooks_namespaceObject = (()=>{
            const e = new Error("Cannot find module 'perf_hooks'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })(), external_os_namespaceObject = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/os-browserify/browser.js [app-client] (ecmascript)"), external_vm_namespaceObject = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/vm-browserify/index.js [app-client] (ecmascript)");
        var external_vm_default = __webpack_require__.n(external_vm_namespaceObject);
        const external_url_namespaceObject = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/native-url/index.js [app-client] (ecmascript)"), _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
        function normalizeWindowsPath(input = "") {
            return input ? input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r)=>r.toUpperCase()) : input;
        }
        const _UNC_REGEX = /^[/\\]{2}/, _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/, _DRIVE_LETTER_RE = /^[A-Za-z]:$/, pathe_ff20891b_normalize = function(path) {
            if (0 === path.length) return ".";
            const isUNCPath = (path = normalizeWindowsPath(path)).match(_UNC_REGEX), isPathAbsolute = isAbsolute(path), trailingSeparator = "/" === path[path.length - 1];
            return 0 === (path = normalizeString(path, !isPathAbsolute)).length ? isPathAbsolute ? "/" : trailingSeparator ? "./" : "." : (trailingSeparator && (path += "/"), _DRIVE_LETTER_RE.test(path) && (path += "/"), isUNCPath ? isPathAbsolute ? `//${path}` : `//./${path}` : isPathAbsolute && !isAbsolute(path) ? `/${path}` : path);
        }, join = function(...arguments_) {
            if (0 === arguments_.length) return ".";
            let joined;
            for (const argument of arguments_)argument && argument.length > 0 && (void 0 === joined ? joined = argument : joined += `/${argument}`);
            return void 0 === joined ? "." : pathe_ff20891b_normalize(joined.replace(/\/\/+/g, "/"));
        };
        function normalizeString(path, allowAboveRoot) {
            let res = "", lastSegmentLength = 0, lastSlash = -1, dots = 0, char = null;
            for(let index = 0; index <= path.length; ++index){
                if (index < path.length) char = path[index];
                else {
                    if ("/" === char) break;
                    char = "/";
                }
                if ("/" === char) {
                    if (lastSlash === index - 1 || 1 === dots) ;
                    else if (2 === dots) {
                        if (res.length < 2 || 2 !== lastSegmentLength || "." !== res[res.length - 1] || "." !== res[res.length - 2]) {
                            if (res.length > 2) {
                                const lastSlashIndex = res.lastIndexOf("/");
                                -1 === lastSlashIndex ? (res = "", lastSegmentLength = 0) : (res = res.slice(0, lastSlashIndex), lastSegmentLength = res.length - 1 - res.lastIndexOf("/")), lastSlash = index, dots = 0;
                                continue;
                            }
                            if (res.length > 0) {
                                res = "", lastSegmentLength = 0, lastSlash = index, dots = 0;
                                continue;
                            }
                        }
                        allowAboveRoot && (res += res.length > 0 ? "/.." : "..", lastSegmentLength = 2);
                    } else res.length > 0 ? res += `/${path.slice(lastSlash + 1, index)}` : res = path.slice(lastSlash + 1, index), lastSegmentLength = index - lastSlash - 1;
                    lastSlash = index, dots = 0;
                } else "." === char && -1 !== dots ? ++dots : dots = -1;
            }
            return res;
        }
        const isAbsolute = function(p) {
            return _IS_ABSOLUTE_RE.test(p);
        }, _EXTNAME_RE = /.(\.[^./]+)$/, extname = function(p) {
            const match = _EXTNAME_RE.exec(normalizeWindowsPath(p));
            return match && match[1] || "";
        }, pathe_ff20891b_dirname = function(p) {
            const segments = normalizeWindowsPath(p).replace(/\/$/, "").split("/").slice(0, -1);
            return 1 === segments.length && _DRIVE_LETTER_RE.test(segments[0]) && (segments[0] += "/"), segments.join("/") || (isAbsolute(p) ? "/" : ".");
        }, basename = function(p, extension) {
            const lastSegment = normalizeWindowsPath(p).split("/").pop();
            return extension && lastSegment.endsWith(extension) ? lastSegment.slice(0, -extension.length) : lastSegment;
        }, suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/, suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/, JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
        function jsonParseTransform(key, value) {
            if (!("__proto__" === key || "constructor" === key && value && "object" == typeof value && "prototype" in value)) return value;
            !function(key) {
                console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
            }(key);
        }
        function destr(value, options = {}) {
            if ("string" != typeof value) return value;
            const _value = value.trim();
            if ('"' === value[0] && value.endsWith('"') && !value.includes("\\")) return _value.slice(1, -1);
            if (_value.length <= 9) {
                const _lval = _value.toLowerCase();
                if ("true" === _lval) return !0;
                if ("false" === _lval) return !1;
                if ("undefined" === _lval) return;
                if ("null" === _lval) return null;
                if ("nan" === _lval) return Number.NaN;
                if ("infinity" === _lval) return Number.POSITIVE_INFINITY;
                if ("-infinity" === _lval) return Number.NEGATIVE_INFINITY;
            }
            if (!JsonSigRx.test(value)) {
                if (options.strict) throw new SyntaxError("[destr] Invalid JSON");
                return value;
            }
            try {
                if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
                    if (options.strict) throw new Error("[destr] Possible prototype pollution");
                    return JSON.parse(value, jsonParseTransform);
                }
                return JSON.parse(value);
            } catch (error) {
                if (options.strict) throw error;
                return value;
            }
        }
        function escapeStringRegexp(string) {
            if ("string" != typeof string) throw new TypeError("Expected a string");
            return string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
        }
        var create_require = __webpack_require__("./node_modules/.pnpm/create-require@1.1.1/node_modules/create-require/create-require.js"), create_require_default = __webpack_require__.n(create_require), semver = __webpack_require__("./node_modules/.pnpm/semver@7.6.3/node_modules/semver/index.js");
        const pathSeparators = new Set([
            "/",
            "\\",
            void 0
        ]), normalizedAliasSymbol = Symbol.for("pathe:normalizedAlias");
        function normalizeAliases(_aliases) {
            if (_aliases[normalizedAliasSymbol]) return _aliases;
            const aliases = Object.fromEntries(Object.entries(_aliases).sort(([a], [b])=>(function(a, b) {
                    return b.split("/").length - a.split("/").length;
                })(a, b)));
            for(const key in aliases)for(const alias in aliases)alias === key || key.startsWith(alias) || aliases[key].startsWith(alias) && pathSeparators.has(aliases[key][alias.length]) && (aliases[key] = aliases[alias] + aliases[key].slice(alias.length));
            return Object.defineProperty(aliases, normalizedAliasSymbol, {
                value: !0,
                enumerable: !1
            }), aliases;
        }
        function hasTrailingSlash(path = "/") {
            const lastChar = path[path.length - 1];
            return "/" === lastChar || "\\" === lastChar;
        }
        var lib = __webpack_require__("./node_modules/.pnpm/pirates@4.0.6/node_modules/pirates/lib/index.js"), object_hash = __webpack_require__("./node_modules/.pnpm/object-hash@3.0.0/node_modules/object-hash/index.js"), object_hash_default = __webpack_require__.n(object_hash), astralIdentifierCodes = [
            509,
            0,
            227,
            0,
            150,
            4,
            294,
            9,
            1368,
            2,
            2,
            1,
            6,
            3,
            41,
            2,
            5,
            0,
            166,
            1,
            574,
            3,
            9,
            9,
            7,
            9,
            32,
            4,
            318,
            1,
            80,
            3,
            71,
            10,
            50,
            3,
            123,
            2,
            54,
            14,
            32,
            10,
            3,
            1,
            11,
            3,
            46,
            10,
            8,
            0,
            46,
            9,
            7,
            2,
            37,
            13,
            2,
            9,
            6,
            1,
            45,
            0,
            13,
            2,
            49,
            13,
            9,
            3,
            2,
            11,
            83,
            11,
            7,
            0,
            3,
            0,
            158,
            11,
            6,
            9,
            7,
            3,
            56,
            1,
            2,
            6,
            3,
            1,
            3,
            2,
            10,
            0,
            11,
            1,
            3,
            6,
            4,
            4,
            68,
            8,
            2,
            0,
            3,
            0,
            2,
            3,
            2,
            4,
            2,
            0,
            15,
            1,
            83,
            17,
            10,
            9,
            5,
            0,
            82,
            19,
            13,
            9,
            214,
            6,
            3,
            8,
            28,
            1,
            83,
            16,
            16,
            9,
            82,
            12,
            9,
            9,
            7,
            19,
            58,
            14,
            5,
            9,
            243,
            14,
            166,
            9,
            71,
            5,
            2,
            1,
            3,
            3,
            2,
            0,
            2,
            1,
            13,
            9,
            120,
            6,
            3,
            6,
            4,
            0,
            29,
            9,
            41,
            6,
            2,
            3,
            9,
            0,
            10,
            10,
            47,
            15,
            343,
            9,
            54,
            7,
            2,
            7,
            17,
            9,
            57,
            21,
            2,
            13,
            123,
            5,
            4,
            0,
            2,
            1,
            2,
            6,
            2,
            0,
            9,
            9,
            49,
            4,
            2,
            1,
            2,
            4,
            9,
            9,
            330,
            3,
            10,
            1,
            2,
            0,
            49,
            6,
            4,
            4,
            14,
            10,
            5350,
            0,
            7,
            14,
            11465,
            27,
            2343,
            9,
            87,
            9,
            39,
            4,
            60,
            6,
            26,
            9,
            535,
            9,
            470,
            0,
            2,
            54,
            8,
            3,
            82,
            0,
            12,
            1,
            19628,
            1,
            4178,
            9,
            519,
            45,
            3,
            22,
            543,
            4,
            4,
            5,
            9,
            7,
            3,
            6,
            31,
            3,
            149,
            2,
            1418,
            49,
            513,
            54,
            5,
            49,
            9,
            0,
            15,
            0,
            23,
            4,
            2,
            14,
            1361,
            6,
            2,
            16,
            3,
            6,
            2,
            1,
            2,
            4,
            101,
            0,
            161,
            6,
            10,
            9,
            357,
            0,
            62,
            13,
            499,
            13,
            245,
            1,
            2,
            9,
            726,
            6,
            110,
            6,
            6,
            9,
            4759,
            9,
            787719,
            239
        ], astralIdentifierStartCodes = [
            0,
            11,
            2,
            25,
            2,
            18,
            2,
            1,
            2,
            14,
            3,
            13,
            35,
            122,
            70,
            52,
            268,
            28,
            4,
            48,
            48,
            31,
            14,
            29,
            6,
            37,
            11,
            29,
            3,
            35,
            5,
            7,
            2,
            4,
            43,
            157,
            19,
            35,
            5,
            35,
            5,
            39,
            9,
            51,
            13,
            10,
            2,
            14,
            2,
            6,
            2,
            1,
            2,
            10,
            2,
            14,
            2,
            6,
            2,
            1,
            4,
            51,
            13,
            310,
            10,
            21,
            11,
            7,
            25,
            5,
            2,
            41,
            2,
            8,
            70,
            5,
            3,
            0,
            2,
            43,
            2,
            1,
            4,
            0,
            3,
            22,
            11,
            22,
            10,
            30,
            66,
            18,
            2,
            1,
            11,
            21,
            11,
            25,
            71,
            55,
            7,
            1,
            65,
            0,
            16,
            3,
            2,
            2,
            2,
            28,
            43,
            28,
            4,
            28,
            36,
            7,
            2,
            27,
            28,
            53,
            11,
            21,
            11,
            18,
            14,
            17,
            111,
            72,
            56,
            50,
            14,
            50,
            14,
            35,
            39,
            27,
            10,
            22,
            251,
            41,
            7,
            1,
            17,
            2,
            60,
            28,
            11,
            0,
            9,
            21,
            43,
            17,
            47,
            20,
            28,
            22,
            13,
            52,
            58,
            1,
            3,
            0,
            14,
            44,
            33,
            24,
            27,
            35,
            30,
            0,
            3,
            0,
            9,
            34,
            4,
            0,
            13,
            47,
            15,
            3,
            22,
            0,
            2,
            0,
            36,
            17,
            2,
            24,
            20,
            1,
            64,
            6,
            2,
            0,
            2,
            3,
            2,
            14,
            2,
            9,
            8,
            46,
            39,
            7,
            3,
            1,
            3,
            21,
            2,
            6,
            2,
            1,
            2,
            4,
            4,
            0,
            19,
            0,
            13,
            4,
            31,
            9,
            2,
            0,
            3,
            0,
            2,
            37,
            2,
            0,
            26,
            0,
            2,
            0,
            45,
            52,
            19,
            3,
            21,
            2,
            31,
            47,
            21,
            1,
            2,
            0,
            185,
            46,
            42,
            3,
            37,
            47,
            21,
            0,
            60,
            42,
            14,
            0,
            72,
            26,
            38,
            6,
            186,
            43,
            117,
            63,
            32,
            7,
            3,
            0,
            3,
            7,
            2,
            1,
            2,
            23,
            16,
            0,
            2,
            0,
            95,
            7,
            3,
            38,
            17,
            0,
            2,
            0,
            29,
            0,
            11,
            39,
            8,
            0,
            22,
            0,
            12,
            45,
            20,
            0,
            19,
            72,
            200,
            32,
            32,
            8,
            2,
            36,
            18,
            0,
            50,
            29,
            113,
            6,
            2,
            1,
            2,
            37,
            22,
            0,
            26,
            5,
            2,
            1,
            2,
            31,
            15,
            0,
            328,
            18,
            16,
            0,
            2,
            12,
            2,
            33,
            125,
            0,
            80,
            921,
            103,
            110,
            18,
            195,
            2637,
            96,
            16,
            1071,
            18,
            5,
            26,
            3994,
            6,
            582,
            6842,
            29,
            1763,
            568,
            8,
            30,
            18,
            78,
            18,
            29,
            19,
            47,
            17,
            3,
            32,
            20,
            6,
            18,
            433,
            44,
            212,
            63,
            129,
            74,
            6,
            0,
            67,
            12,
            65,
            1,
            2,
            0,
            29,
            6135,
            9,
            1237,
            42,
            9,
            8936,
            3,
            2,
            6,
            2,
            1,
            2,
            290,
            16,
            0,
            30,
            2,
            3,
            0,
            15,
            3,
            9,
            395,
            2309,
            106,
            6,
            12,
            4,
            8,
            8,
            9,
            5991,
            84,
            2,
            70,
            2,
            1,
            3,
            0,
            3,
            1,
            3,
            3,
            2,
            11,
            2,
            0,
            2,
            6,
            2,
            64,
            2,
            3,
            3,
            7,
            2,
            6,
            2,
            27,
            2,
            3,
            2,
            4,
            2,
            0,
            4,
            6,
            2,
            339,
            3,
            24,
            2,
            24,
            2,
            30,
            2,
            24,
            2,
            30,
            2,
            24,
            2,
            30,
            2,
            24,
            2,
            30,
            2,
            24,
            2,
            7,
            1845,
            30,
            7,
            5,
            262,
            61,
            147,
            44,
            11,
            6,
            17,
            0,
            322,
            29,
            19,
            43,
            485,
            27,
            229,
            29,
            3,
            0,
            496,
            6,
            2,
            3,
            2,
            1,
            2,
            14,
            2,
            196,
            60,
            67,
            8,
            0,
            1205,
            3,
            2,
            26,
            2,
            1,
            2,
            0,
            3,
            0,
            2,
            9,
            2,
            3,
            2,
            0,
            2,
            0,
            7,
            0,
            5,
            0,
            2,
            0,
            2,
            0,
            2,
            2,
            2,
            1,
            2,
            0,
            3,
            0,
            2,
            0,
            2,
            0,
            2,
            0,
            2,
            0,
            2,
            1,
            2,
            0,
            3,
            3,
            2,
            6,
            2,
            3,
            2,
            3,
            2,
            0,
            2,
            9,
            2,
            16,
            6,
            2,
            2,
            4,
            2,
            16,
            4421,
            42719,
            33,
            4153,
            7,
            221,
            3,
            5761,
            15,
            7472,
            16,
            621,
            2467,
            541,
            1507,
            4938,
            6,
            4191
        ], nonASCIIidentifierStartChars = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲊᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟍꟐꟑꟓꟕ-Ƛꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", reservedWords = {
            3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
            5: "class enum extends super const export import",
            6: "enum",
            strict: "implements interface let package private protected public static yield",
            strictBind: "eval arguments"
        }, ecma5AndLessKeywords = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this", keywords$1 = {
            5: ecma5AndLessKeywords,
            "5module": ecma5AndLessKeywords + " export import",
            6: ecma5AndLessKeywords + " const class extends export import super"
        }, keywordRelationalOperator = /^in(stanceof)?$/, nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]"), nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࢗ-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･]");
        function isInAstralSet(code, set) {
            for(var pos = 65536, i = 0; i < set.length; i += 2){
                if ((pos += set[i]) > code) return !1;
                if ((pos += set[i + 1]) >= code) return !0;
            }
            return !1;
        }
        function isIdentifierStart(code, astral) {
            return code < 65 ? 36 === code : code < 91 || (code < 97 ? 95 === code : code < 123 || (code <= 65535 ? code >= 170 && nonASCIIidentifierStart.test(String.fromCharCode(code)) : !1 !== astral && isInAstralSet(code, astralIdentifierStartCodes)));
        }
        function isIdentifierChar(code, astral) {
            return code < 48 ? 36 === code : code < 58 || !(code < 65) && (code < 91 || (code < 97 ? 95 === code : code < 123 || (code <= 65535 ? code >= 170 && nonASCIIidentifier.test(String.fromCharCode(code)) : !1 !== astral && (isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes)))));
        }
        var TokenType = function(label, conf) {
            void 0 === conf && (conf = {}), this.label = label, this.keyword = conf.keyword, this.beforeExpr = !!conf.beforeExpr, this.startsExpr = !!conf.startsExpr, this.isLoop = !!conf.isLoop, this.isAssign = !!conf.isAssign, this.prefix = !!conf.prefix, this.postfix = !!conf.postfix, this.binop = conf.binop || null, this.updateContext = null;
        };
        function binop(name, prec) {
            return new TokenType(name, {
                beforeExpr: !0,
                binop: prec
            });
        }
        var beforeExpr = {
            beforeExpr: !0
        }, startsExpr = {
            startsExpr: !0
        }, keywords = {};
        function kw(name, options) {
            return void 0 === options && (options = {}), options.keyword = name, keywords[name] = new TokenType(name, options);
        }
        var types$1 = {
            num: new TokenType("num", startsExpr),
            regexp: new TokenType("regexp", startsExpr),
            string: new TokenType("string", startsExpr),
            name: new TokenType("name", startsExpr),
            privateId: new TokenType("privateId", startsExpr),
            eof: new TokenType("eof"),
            bracketL: new TokenType("[", {
                beforeExpr: !0,
                startsExpr: !0
            }),
            bracketR: new TokenType("]"),
            braceL: new TokenType("{", {
                beforeExpr: !0,
                startsExpr: !0
            }),
            braceR: new TokenType("}"),
            parenL: new TokenType("(", {
                beforeExpr: !0,
                startsExpr: !0
            }),
            parenR: new TokenType(")"),
            comma: new TokenType(",", beforeExpr),
            semi: new TokenType(";", beforeExpr),
            colon: new TokenType(":", beforeExpr),
            dot: new TokenType("."),
            question: new TokenType("?", beforeExpr),
            questionDot: new TokenType("?."),
            arrow: new TokenType("=>", beforeExpr),
            template: new TokenType("template"),
            invalidTemplate: new TokenType("invalidTemplate"),
            ellipsis: new TokenType("...", beforeExpr),
            backQuote: new TokenType("`", startsExpr),
            dollarBraceL: new TokenType("${", {
                beforeExpr: !0,
                startsExpr: !0
            }),
            eq: new TokenType("=", {
                beforeExpr: !0,
                isAssign: !0
            }),
            assign: new TokenType("_=", {
                beforeExpr: !0,
                isAssign: !0
            }),
            incDec: new TokenType("++/--", {
                prefix: !0,
                postfix: !0,
                startsExpr: !0
            }),
            prefix: new TokenType("!/~", {
                beforeExpr: !0,
                prefix: !0,
                startsExpr: !0
            }),
            logicalOR: binop("||", 1),
            logicalAND: binop("&&", 2),
            bitwiseOR: binop("|", 3),
            bitwiseXOR: binop("^", 4),
            bitwiseAND: binop("&", 5),
            equality: binop("==/!=/===/!==", 6),
            relational: binop("</>/<=/>=", 7),
            bitShift: binop("<</>>/>>>", 8),
            plusMin: new TokenType("+/-", {
                beforeExpr: !0,
                binop: 9,
                prefix: !0,
                startsExpr: !0
            }),
            modulo: binop("%", 10),
            star: binop("*", 10),
            slash: binop("/", 10),
            starstar: new TokenType("**", {
                beforeExpr: !0
            }),
            coalesce: binop("??", 1),
            _break: kw("break"),
            _case: kw("case", beforeExpr),
            _catch: kw("catch"),
            _continue: kw("continue"),
            _debugger: kw("debugger"),
            _default: kw("default", beforeExpr),
            _do: kw("do", {
                isLoop: !0,
                beforeExpr: !0
            }),
            _else: kw("else", beforeExpr),
            _finally: kw("finally"),
            _for: kw("for", {
                isLoop: !0
            }),
            _function: kw("function", startsExpr),
            _if: kw("if"),
            _return: kw("return", beforeExpr),
            _switch: kw("switch"),
            _throw: kw("throw", beforeExpr),
            _try: kw("try"),
            _var: kw("var"),
            _const: kw("const"),
            _while: kw("while", {
                isLoop: !0
            }),
            _with: kw("with"),
            _new: kw("new", {
                beforeExpr: !0,
                startsExpr: !0
            }),
            _this: kw("this", startsExpr),
            _super: kw("super", startsExpr),
            _class: kw("class", startsExpr),
            _extends: kw("extends", beforeExpr),
            _export: kw("export"),
            _import: kw("import", startsExpr),
            _null: kw("null", startsExpr),
            _true: kw("true", startsExpr),
            _false: kw("false", startsExpr),
            _in: kw("in", {
                beforeExpr: !0,
                binop: 7
            }),
            _instanceof: kw("instanceof", {
                beforeExpr: !0,
                binop: 7
            }),
            _typeof: kw("typeof", {
                beforeExpr: !0,
                prefix: !0,
                startsExpr: !0
            }),
            _void: kw("void", {
                beforeExpr: !0,
                prefix: !0,
                startsExpr: !0
            }),
            _delete: kw("delete", {
                beforeExpr: !0,
                prefix: !0,
                startsExpr: !0
            })
        }, lineBreak = /\r\n?|\n|\u2028|\u2029/, lineBreakG = new RegExp(lineBreak.source, "g");
        function isNewLine(code) {
            return 10 === code || 13 === code || 8232 === code || 8233 === code;
        }
        function nextLineBreak(code, from, end) {
            void 0 === end && (end = code.length);
            for(var i = from; i < end; i++){
                var next = code.charCodeAt(i);
                if (isNewLine(next)) return i < end - 1 && 13 === next && 10 === code.charCodeAt(i + 1) ? i + 2 : i + 1;
            }
            return -1;
        }
        var nonASCIIwhitespace = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/, skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, ref = Object.prototype, acorn_hasOwnProperty = ref.hasOwnProperty, acorn_toString = ref.toString, hasOwn = Object.hasOwn || function(obj, propName) {
            return acorn_hasOwnProperty.call(obj, propName);
        }, isArray = Array.isArray || function(obj) {
            return "[object Array]" === acorn_toString.call(obj);
        }, regexpCache = Object.create(null);
        function wordsRegexp(words) {
            return regexpCache[words] || (regexpCache[words] = new RegExp("^(?:" + words.replace(/ /g, "|") + ")$"));
        }
        function codePointToString(code) {
            return code <= 65535 ? String.fromCharCode(code) : (code -= 65536, String.fromCharCode(55296 + (code >> 10), 56320 + (1023 & code)));
        }
        var loneSurrogate = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/, Position = function(line, col) {
            this.line = line, this.column = col;
        };
        Position.prototype.offset = function(n) {
            return new Position(this.line, this.column + n);
        };
        var SourceLocation = function(p, start, end) {
            this.start = start, this.end = end, null !== p.sourceFile && (this.source = p.sourceFile);
        };
        function getLineInfo(input, offset) {
            for(var line = 1, cur = 0;;){
                var nextBreak = nextLineBreak(input, cur, offset);
                if (nextBreak < 0) return new Position(line, offset - cur);
                ++line, cur = nextBreak;
            }
        }
        var defaultOptions = {
            ecmaVersion: null,
            sourceType: "script",
            onInsertedSemicolon: null,
            onTrailingComma: null,
            allowReserved: null,
            allowReturnOutsideFunction: !1,
            allowImportExportEverywhere: !1,
            allowAwaitOutsideFunction: null,
            allowSuperOutsideMethod: null,
            allowHashBang: !1,
            checkPrivateFields: !0,
            locations: !1,
            onToken: null,
            onComment: null,
            ranges: !1,
            program: null,
            sourceFile: null,
            directSourceFile: null,
            preserveParens: !1
        }, warnedAboutEcmaVersion = !1;
        function getOptions(opts) {
            var options = {};
            for(var opt in defaultOptions)options[opt] = opts && hasOwn(opts, opt) ? opts[opt] : defaultOptions[opt];
            if ("latest" === options.ecmaVersion ? options.ecmaVersion = 1e8 : null == options.ecmaVersion ? (!warnedAboutEcmaVersion && "object" == typeof console && console.warn && (warnedAboutEcmaVersion = !0, console.warn("Since Acorn 8.0.0, options.ecmaVersion is required.\nDefaulting to 2020, but this will stop working in the future.")), options.ecmaVersion = 11) : options.ecmaVersion >= 2015 && (options.ecmaVersion -= 2009), null == options.allowReserved && (options.allowReserved = options.ecmaVersion < 5), opts && null != opts.allowHashBang || (options.allowHashBang = options.ecmaVersion >= 14), isArray(options.onToken)) {
                var tokens = options.onToken;
                options.onToken = function(token) {
                    return tokens.push(token);
                };
            }
            return isArray(options.onComment) && (options.onComment = function(options, array) {
                return function(block, text, start, end, startLoc, endLoc) {
                    var comment = {
                        type: block ? "Block" : "Line",
                        value: text,
                        start,
                        end
                    };
                    options.locations && (comment.loc = new SourceLocation(this, startLoc, endLoc)), options.ranges && (comment.range = [
                        start,
                        end
                    ]), array.push(comment);
                };
            }(options, options.onComment)), options;
        }
        function functionFlags(async, generator) {
            return 2 | (async ? 4 : 0) | (generator ? 8 : 0);
        }
        var Parser = function(options, input, startPos) {
            this.options = options = getOptions(options), this.sourceFile = options.sourceFile, this.keywords = wordsRegexp(keywords$1[options.ecmaVersion >= 6 ? 6 : "module" === options.sourceType ? "5module" : 5]);
            var reserved = "";
            !0 !== options.allowReserved && (reserved = reservedWords[options.ecmaVersion >= 6 ? 6 : 5 === options.ecmaVersion ? 5 : 3], "module" === options.sourceType && (reserved += " await")), this.reservedWords = wordsRegexp(reserved);
            var reservedStrict = (reserved ? reserved + " " : "") + reservedWords.strict;
            this.reservedWordsStrict = wordsRegexp(reservedStrict), this.reservedWordsStrictBind = wordsRegexp(reservedStrict + " " + reservedWords.strictBind), this.input = String(input), this.containsEsc = !1, startPos ? (this.pos = startPos, this.lineStart = this.input.lastIndexOf("\n", startPos - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(lineBreak).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = types$1.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = "module" === options.sourceType, this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.potentialArrowInForAwait = !1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = Object.create(null), 0 === this.pos && options.allowHashBang && "#!" === this.input.slice(0, 2) && this.skipLineComment(2), this.scopeStack = [], this.enterScope(1), this.regexpState = null, this.privateNameStack = [];
        }, prototypeAccessors = {
            inFunction: {
                configurable: !0
            },
            inGenerator: {
                configurable: !0
            },
            inAsync: {
                configurable: !0
            },
            canAwait: {
                configurable: !0
            },
            allowSuper: {
                configurable: !0
            },
            allowDirectSuper: {
                configurable: !0
            },
            treatFunctionsAsVar: {
                configurable: !0
            },
            allowNewDotTarget: {
                configurable: !0
            },
            inClassStaticBlock: {
                configurable: !0
            }
        };
        Parser.prototype.parse = function() {
            var node = this.options.program || this.startNode();
            return this.nextToken(), this.parseTopLevel(node);
        }, prototypeAccessors.inFunction.get = function() {
            return (2 & this.currentVarScope().flags) > 0;
        }, prototypeAccessors.inGenerator.get = function() {
            return (8 & this.currentVarScope().flags) > 0 && !this.currentVarScope().inClassFieldInit;
        }, prototypeAccessors.inAsync.get = function() {
            return (4 & this.currentVarScope().flags) > 0 && !this.currentVarScope().inClassFieldInit;
        }, prototypeAccessors.canAwait.get = function() {
            for(var i = this.scopeStack.length - 1; i >= 0; i--){
                var scope = this.scopeStack[i];
                if (scope.inClassFieldInit || 256 & scope.flags) return !1;
                if (2 & scope.flags) return (4 & scope.flags) > 0;
            }
            return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
        }, prototypeAccessors.allowSuper.get = function() {
            var ref = this.currentThisScope(), flags = ref.flags, inClassFieldInit = ref.inClassFieldInit;
            return (64 & flags) > 0 || inClassFieldInit || this.options.allowSuperOutsideMethod;
        }, prototypeAccessors.allowDirectSuper.get = function() {
            return (128 & this.currentThisScope().flags) > 0;
        }, prototypeAccessors.treatFunctionsAsVar.get = function() {
            return this.treatFunctionsAsVarInScope(this.currentScope());
        }, prototypeAccessors.allowNewDotTarget.get = function() {
            var ref = this.currentThisScope(), flags = ref.flags, inClassFieldInit = ref.inClassFieldInit;
            return (258 & flags) > 0 || inClassFieldInit;
        }, prototypeAccessors.inClassStaticBlock.get = function() {
            return (256 & this.currentVarScope().flags) > 0;
        }, Parser.extend = function() {
            for(var plugins = [], len = arguments.length; len--;)plugins[len] = arguments[len];
            for(var cls = this, i = 0; i < plugins.length; i++)cls = plugins[i](cls);
            return cls;
        }, Parser.parse = function(input, options) {
            return new this(options, input).parse();
        }, Parser.parseExpressionAt = function(input, pos, options) {
            var parser = new this(options, input, pos);
            return parser.nextToken(), parser.parseExpression();
        }, Parser.tokenizer = function(input, options) {
            return new this(options, input);
        }, Object.defineProperties(Parser.prototype, prototypeAccessors);
        var pp$9 = Parser.prototype, literal = /^(?:'((?:\\[^]|[^'\\])*?)'|"((?:\\[^]|[^"\\])*?)")/;
        pp$9.strictDirective = function(start) {
            if (this.options.ecmaVersion < 5) return !1;
            for(;;){
                skipWhiteSpace.lastIndex = start, start += skipWhiteSpace.exec(this.input)[0].length;
                var match = literal.exec(this.input.slice(start));
                if (!match) return !1;
                if ("use strict" === (match[1] || match[2])) {
                    skipWhiteSpace.lastIndex = start + match[0].length;
                    var spaceAfter = skipWhiteSpace.exec(this.input), end = spaceAfter.index + spaceAfter[0].length, next = this.input.charAt(end);
                    return ";" === next || "}" === next || lineBreak.test(spaceAfter[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(next) || "!" === next && "=" === this.input.charAt(end + 1));
                }
                start += match[0].length, skipWhiteSpace.lastIndex = start, start += skipWhiteSpace.exec(this.input)[0].length, ";" === this.input[start] && start++;
            }
        }, pp$9.eat = function(type) {
            return this.type === type && (this.next(), !0);
        }, pp$9.isContextual = function(name) {
            return this.type === types$1.name && this.value === name && !this.containsEsc;
        }, pp$9.eatContextual = function(name) {
            return !!this.isContextual(name) && (this.next(), !0);
        }, pp$9.expectContextual = function(name) {
            this.eatContextual(name) || this.unexpected();
        }, pp$9.canInsertSemicolon = function() {
            return this.type === types$1.eof || this.type === types$1.braceR || lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
        }, pp$9.insertSemicolon = function() {
            if (this.canInsertSemicolon()) return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0;
        }, pp$9.semicolon = function() {
            this.eat(types$1.semi) || this.insertSemicolon() || this.unexpected();
        }, pp$9.afterTrailingComma = function(tokType, notNext) {
            if (this.type === tokType) return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), notNext || this.next(), !0;
        }, pp$9.expect = function(type) {
            this.eat(type) || this.unexpected();
        }, pp$9.unexpected = function(pos) {
            this.raise(null != pos ? pos : this.start, "Unexpected token");
        };
        var DestructuringErrors = function() {
            this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
        };
        pp$9.checkPatternErrors = function(refDestructuringErrors, isAssign) {
            if (refDestructuringErrors) {
                refDestructuringErrors.trailingComma > -1 && this.raiseRecoverable(refDestructuringErrors.trailingComma, "Comma is not permitted after the rest element");
                var parens = isAssign ? refDestructuringErrors.parenthesizedAssign : refDestructuringErrors.parenthesizedBind;
                parens > -1 && this.raiseRecoverable(parens, isAssign ? "Assigning to rvalue" : "Parenthesized pattern");
            }
        }, pp$9.checkExpressionErrors = function(refDestructuringErrors, andThrow) {
            if (!refDestructuringErrors) return !1;
            var shorthandAssign = refDestructuringErrors.shorthandAssign, doubleProto = refDestructuringErrors.doubleProto;
            if (!andThrow) return shorthandAssign >= 0 || doubleProto >= 0;
            shorthandAssign >= 0 && this.raise(shorthandAssign, "Shorthand property assignments are valid only in destructuring patterns"), doubleProto >= 0 && this.raiseRecoverable(doubleProto, "Redefinition of __proto__ property");
        }, pp$9.checkYieldAwaitInDefaultParams = function() {
            this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value");
        }, pp$9.isSimpleAssignTarget = function(expr) {
            return "ParenthesizedExpression" === expr.type ? this.isSimpleAssignTarget(expr.expression) : "Identifier" === expr.type || "MemberExpression" === expr.type;
        };
        var pp$8 = Parser.prototype;
        pp$8.parseTopLevel = function(node) {
            var exports = Object.create(null);
            for(node.body || (node.body = []); this.type !== types$1.eof;){
                var stmt = this.parseStatement(null, !0, exports);
                node.body.push(stmt);
            }
            if (this.inModule) for(var i = 0, list = Object.keys(this.undefinedExports); i < list.length; i += 1){
                var name = list[i];
                this.raiseRecoverable(this.undefinedExports[name].start, "Export '" + name + "' is not defined");
            }
            return this.adaptDirectivePrologue(node.body), this.next(), node.sourceType = this.options.sourceType, this.finishNode(node, "Program");
        };
        var loopLabel = {
            kind: "loop"
        }, switchLabel = {
            kind: "switch"
        };
        pp$8.isLet = function(context) {
            if (this.options.ecmaVersion < 6 || !this.isContextual("let")) return !1;
            skipWhiteSpace.lastIndex = this.pos;
            var skip = skipWhiteSpace.exec(this.input), next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
            if (91 === nextCh || 92 === nextCh) return !0;
            if (context) return !1;
            if (123 === nextCh || nextCh > 55295 && nextCh < 56320) return !0;
            if (isIdentifierStart(nextCh, !0)) {
                for(var pos = next + 1; isIdentifierChar(nextCh = this.input.charCodeAt(pos), !0);)++pos;
                if (92 === nextCh || nextCh > 55295 && nextCh < 56320) return !0;
                var ident = this.input.slice(next, pos);
                if (!keywordRelationalOperator.test(ident)) return !0;
            }
            return !1;
        }, pp$8.isAsyncFunction = function() {
            if (this.options.ecmaVersion < 8 || !this.isContextual("async")) return !1;
            skipWhiteSpace.lastIndex = this.pos;
            var after, skip = skipWhiteSpace.exec(this.input), next = this.pos + skip[0].length;
            return !(lineBreak.test(this.input.slice(this.pos, next)) || "function" !== this.input.slice(next, next + 8) || next + 8 !== this.input.length && (isIdentifierChar(after = this.input.charCodeAt(next + 8)) || after > 55295 && after < 56320));
        }, pp$8.parseStatement = function(context, topLevel, exports) {
            var kind, starttype = this.type, node = this.startNode();
            switch(this.isLet(context) && (starttype = types$1._var, kind = "let"), starttype){
                case types$1._break:
                case types$1._continue:
                    return this.parseBreakContinueStatement(node, starttype.keyword);
                case types$1._debugger:
                    return this.parseDebuggerStatement(node);
                case types$1._do:
                    return this.parseDoStatement(node);
                case types$1._for:
                    return this.parseForStatement(node);
                case types$1._function:
                    return context && (this.strict || "if" !== context && "label" !== context) && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(node, !1, !context);
                case types$1._class:
                    return context && this.unexpected(), this.parseClass(node, !0);
                case types$1._if:
                    return this.parseIfStatement(node);
                case types$1._return:
                    return this.parseReturnStatement(node);
                case types$1._switch:
                    return this.parseSwitchStatement(node);
                case types$1._throw:
                    return this.parseThrowStatement(node);
                case types$1._try:
                    return this.parseTryStatement(node);
                case types$1._const:
                case types$1._var:
                    return kind = kind || this.value, context && "var" !== kind && this.unexpected(), this.parseVarStatement(node, kind);
                case types$1._while:
                    return this.parseWhileStatement(node);
                case types$1._with:
                    return this.parseWithStatement(node);
                case types$1.braceL:
                    return this.parseBlock(!0, node);
                case types$1.semi:
                    return this.parseEmptyStatement(node);
                case types$1._export:
                case types$1._import:
                    if (this.options.ecmaVersion > 10 && starttype === types$1._import) {
                        skipWhiteSpace.lastIndex = this.pos;
                        var skip = skipWhiteSpace.exec(this.input), next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
                        if (40 === nextCh || 46 === nextCh) return this.parseExpressionStatement(node, this.parseExpression());
                    }
                    return this.options.allowImportExportEverywhere || (topLevel || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), starttype === types$1._import ? this.parseImport(node) : this.parseExport(node, exports);
                default:
                    if (this.isAsyncFunction()) return context && this.unexpected(), this.next(), this.parseFunctionStatement(node, !0, !context);
                    var maybeName = this.value, expr = this.parseExpression();
                    return starttype === types$1.name && "Identifier" === expr.type && this.eat(types$1.colon) ? this.parseLabeledStatement(node, maybeName, expr, context) : this.parseExpressionStatement(node, expr);
            }
        }, pp$8.parseBreakContinueStatement = function(node, keyword) {
            var isBreak = "break" === keyword;
            this.next(), this.eat(types$1.semi) || this.insertSemicolon() ? node.label = null : this.type !== types$1.name ? this.unexpected() : (node.label = this.parseIdent(), this.semicolon());
            for(var i = 0; i < this.labels.length; ++i){
                var lab = this.labels[i];
                if (null == node.label || lab.name === node.label.name) {
                    if (null != lab.kind && (isBreak || "loop" === lab.kind)) break;
                    if (node.label && isBreak) break;
                }
            }
            return i === this.labels.length && this.raise(node.start, "Unsyntactic " + keyword), this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement");
        }, pp$8.parseDebuggerStatement = function(node) {
            return this.next(), this.semicolon(), this.finishNode(node, "DebuggerStatement");
        }, pp$8.parseDoStatement = function(node) {
            return this.next(), this.labels.push(loopLabel), node.body = this.parseStatement("do"), this.labels.pop(), this.expect(types$1._while), node.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(types$1.semi) : this.semicolon(), this.finishNode(node, "DoWhileStatement");
        }, pp$8.parseForStatement = function(node) {
            this.next();
            var awaitAt = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
            if (this.labels.push(loopLabel), this.enterScope(0), this.expect(types$1.parenL), this.type === types$1.semi) return awaitAt > -1 && this.unexpected(awaitAt), this.parseFor(node, null);
            var isLet = this.isLet();
            if (this.type === types$1._var || this.type === types$1._const || isLet) {
                var init$1 = this.startNode(), kind = isLet ? "let" : this.value;
                return this.next(), this.parseVar(init$1, !0, kind), this.finishNode(init$1, "VariableDeclaration"), (this.type === types$1._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && 1 === init$1.declarations.length ? (this.options.ecmaVersion >= 9 && (this.type === types$1._in ? awaitAt > -1 && this.unexpected(awaitAt) : node.await = awaitAt > -1), this.parseForIn(node, init$1)) : (awaitAt > -1 && this.unexpected(awaitAt), this.parseFor(node, init$1));
            }
            var startsWithLet = this.isContextual("let"), isForOf = !1, containsEsc = this.containsEsc, refDestructuringErrors = new DestructuringErrors, initPos = this.start, init = awaitAt > -1 ? this.parseExprSubscripts(refDestructuringErrors, "await") : this.parseExpression(!0, refDestructuringErrors);
            return this.type === types$1._in || (isForOf = this.options.ecmaVersion >= 6 && this.isContextual("of")) ? (awaitAt > -1 ? (this.type === types$1._in && this.unexpected(awaitAt), node.await = !0) : isForOf && this.options.ecmaVersion >= 8 && (init.start !== initPos || containsEsc || "Identifier" !== init.type || "async" !== init.name ? this.options.ecmaVersion >= 9 && (node.await = !1) : this.unexpected()), startsWithLet && isForOf && this.raise(init.start, "The left-hand side of a for-of loop may not start with 'let'."), this.toAssignable(init, !1, refDestructuringErrors), this.checkLValPattern(init), this.parseForIn(node, init)) : (this.checkExpressionErrors(refDestructuringErrors, !0), awaitAt > -1 && this.unexpected(awaitAt), this.parseFor(node, init));
        }, pp$8.parseFunctionStatement = function(node, isAsync, declarationPosition) {
            return this.next(), this.parseFunction(node, FUNC_STATEMENT | (declarationPosition ? 0 : FUNC_HANGING_STATEMENT), !1, isAsync);
        }, pp$8.parseIfStatement = function(node) {
            return this.next(), node.test = this.parseParenExpression(), node.consequent = this.parseStatement("if"), node.alternate = this.eat(types$1._else) ? this.parseStatement("if") : null, this.finishNode(node, "IfStatement");
        }, pp$8.parseReturnStatement = function(node) {
            return this.inFunction || this.options.allowReturnOutsideFunction || this.raise(this.start, "'return' outside of function"), this.next(), this.eat(types$1.semi) || this.insertSemicolon() ? node.argument = null : (node.argument = this.parseExpression(), this.semicolon()), this.finishNode(node, "ReturnStatement");
        }, pp$8.parseSwitchStatement = function(node) {
            var cur;
            this.next(), node.discriminant = this.parseParenExpression(), node.cases = [], this.expect(types$1.braceL), this.labels.push(switchLabel), this.enterScope(0);
            for(var sawDefault = !1; this.type !== types$1.braceR;)if (this.type === types$1._case || this.type === types$1._default) {
                var isCase = this.type === types$1._case;
                cur && this.finishNode(cur, "SwitchCase"), node.cases.push(cur = this.startNode()), cur.consequent = [], this.next(), isCase ? cur.test = this.parseExpression() : (sawDefault && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), sawDefault = !0, cur.test = null), this.expect(types$1.colon);
            } else cur || this.unexpected(), cur.consequent.push(this.parseStatement(null));
            return this.exitScope(), cur && this.finishNode(cur, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(node, "SwitchStatement");
        }, pp$8.parseThrowStatement = function(node) {
            return this.next(), lineBreak.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), node.argument = this.parseExpression(), this.semicolon(), this.finishNode(node, "ThrowStatement");
        };
        var empty$1 = [];
        pp$8.parseCatchClauseParam = function() {
            var param = this.parseBindingAtom(), simple = "Identifier" === param.type;
            return this.enterScope(simple ? 32 : 0), this.checkLValPattern(param, simple ? 4 : 2), this.expect(types$1.parenR), param;
        }, pp$8.parseTryStatement = function(node) {
            if (this.next(), node.block = this.parseBlock(), node.handler = null, this.type === types$1._catch) {
                var clause = this.startNode();
                this.next(), this.eat(types$1.parenL) ? clause.param = this.parseCatchClauseParam() : (this.options.ecmaVersion < 10 && this.unexpected(), clause.param = null, this.enterScope(0)), clause.body = this.parseBlock(!1), this.exitScope(), node.handler = this.finishNode(clause, "CatchClause");
            }
            return node.finalizer = this.eat(types$1._finally) ? this.parseBlock() : null, node.handler || node.finalizer || this.raise(node.start, "Missing catch or finally clause"), this.finishNode(node, "TryStatement");
        }, pp$8.parseVarStatement = function(node, kind, allowMissingInitializer) {
            return this.next(), this.parseVar(node, !1, kind, allowMissingInitializer), this.semicolon(), this.finishNode(node, "VariableDeclaration");
        }, pp$8.parseWhileStatement = function(node) {
            return this.next(), node.test = this.parseParenExpression(), this.labels.push(loopLabel), node.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(node, "WhileStatement");
        }, pp$8.parseWithStatement = function(node) {
            return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), node.object = this.parseParenExpression(), node.body = this.parseStatement("with"), this.finishNode(node, "WithStatement");
        }, pp$8.parseEmptyStatement = function(node) {
            return this.next(), this.finishNode(node, "EmptyStatement");
        }, pp$8.parseLabeledStatement = function(node, maybeName, expr, context) {
            for(var i$1 = 0, list = this.labels; i$1 < list.length; i$1 += 1){
                list[i$1].name === maybeName && this.raise(expr.start, "Label '" + maybeName + "' is already declared");
            }
            for(var kind = this.type.isLoop ? "loop" : this.type === types$1._switch ? "switch" : null, i = this.labels.length - 1; i >= 0; i--){
                var label$1 = this.labels[i];
                if (label$1.statementStart !== node.start) break;
                label$1.statementStart = this.start, label$1.kind = kind;
            }
            return this.labels.push({
                name: maybeName,
                kind,
                statementStart: this.start
            }), node.body = this.parseStatement(context ? -1 === context.indexOf("label") ? context + "label" : context : "label"), this.labels.pop(), node.label = expr, this.finishNode(node, "LabeledStatement");
        }, pp$8.parseExpressionStatement = function(node, expr) {
            return node.expression = expr, this.semicolon(), this.finishNode(node, "ExpressionStatement");
        }, pp$8.parseBlock = function(createNewLexicalScope, node, exitStrict) {
            for(void 0 === createNewLexicalScope && (createNewLexicalScope = !0), void 0 === node && (node = this.startNode()), node.body = [], this.expect(types$1.braceL), createNewLexicalScope && this.enterScope(0); this.type !== types$1.braceR;){
                var stmt = this.parseStatement(null);
                node.body.push(stmt);
            }
            return exitStrict && (this.strict = !1), this.next(), createNewLexicalScope && this.exitScope(), this.finishNode(node, "BlockStatement");
        }, pp$8.parseFor = function(node, init) {
            return node.init = init, this.expect(types$1.semi), node.test = this.type === types$1.semi ? null : this.parseExpression(), this.expect(types$1.semi), node.update = this.type === types$1.parenR ? null : this.parseExpression(), this.expect(types$1.parenR), node.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(node, "ForStatement");
        }, pp$8.parseForIn = function(node, init) {
            var isForIn = this.type === types$1._in;
            return this.next(), "VariableDeclaration" === init.type && null != init.declarations[0].init && (!isForIn || this.options.ecmaVersion < 8 || this.strict || "var" !== init.kind || "Identifier" !== init.declarations[0].id.type) && this.raise(init.start, (isForIn ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"), node.left = init, node.right = isForIn ? this.parseExpression() : this.parseMaybeAssign(), this.expect(types$1.parenR), node.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(node, isForIn ? "ForInStatement" : "ForOfStatement");
        }, pp$8.parseVar = function(node, isFor, kind, allowMissingInitializer) {
            for(node.declarations = [], node.kind = kind;;){
                var decl = this.startNode();
                if (this.parseVarId(decl, kind), this.eat(types$1.eq) ? decl.init = this.parseMaybeAssign(isFor) : allowMissingInitializer || "const" !== kind || this.type === types$1._in || this.options.ecmaVersion >= 6 && this.isContextual("of") ? allowMissingInitializer || "Identifier" === decl.id.type || isFor && (this.type === types$1._in || this.isContextual("of")) ? decl.init = null : this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : this.unexpected(), node.declarations.push(this.finishNode(decl, "VariableDeclarator")), !this.eat(types$1.comma)) break;
            }
            return node;
        }, pp$8.parseVarId = function(decl, kind) {
            decl.id = this.parseBindingAtom(), this.checkLValPattern(decl.id, "var" === kind ? 1 : 2, !1);
        };
        var FUNC_STATEMENT = 1, FUNC_HANGING_STATEMENT = 2;
        function isPrivateNameConflicted(privateNameMap, element) {
            var name = element.key.name, curr = privateNameMap[name], next = "true";
            return "MethodDefinition" !== element.type || "get" !== element.kind && "set" !== element.kind || (next = (element.static ? "s" : "i") + element.kind), "iget" === curr && "iset" === next || "iset" === curr && "iget" === next || "sget" === curr && "sset" === next || "sset" === curr && "sget" === next ? (privateNameMap[name] = "true", !1) : !!curr || (privateNameMap[name] = next, !1);
        }
        function checkKeyName(node, name) {
            var computed = node.computed, key = node.key;
            return !computed && ("Identifier" === key.type && key.name === name || "Literal" === key.type && key.value === name);
        }
        pp$8.parseFunction = function(node, statement, allowExpressionBody, isAsync, forInit) {
            this.initFunction(node), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !isAsync) && (this.type === types$1.star && statement & FUNC_HANGING_STATEMENT && this.unexpected(), node.generator = this.eat(types$1.star)), this.options.ecmaVersion >= 8 && (node.async = !!isAsync), statement & FUNC_STATEMENT && (node.id = 4 & statement && this.type !== types$1.name ? null : this.parseIdent(), !node.id || statement & FUNC_HANGING_STATEMENT || this.checkLValSimple(node.id, this.strict || node.generator || node.async ? this.treatFunctionsAsVar ? 1 : 2 : 3));
            var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
            return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(functionFlags(node.async, node.generator)), statement & FUNC_STATEMENT || (node.id = this.type === types$1.name ? this.parseIdent() : null), this.parseFunctionParams(node), this.parseFunctionBody(node, allowExpressionBody, !1, forInit), this.yieldPos = oldYieldPos, this.awaitPos = oldAwaitPos, this.awaitIdentPos = oldAwaitIdentPos, this.finishNode(node, statement & FUNC_STATEMENT ? "FunctionDeclaration" : "FunctionExpression");
        }, pp$8.parseFunctionParams = function(node) {
            this.expect(types$1.parenL), node.params = this.parseBindingList(types$1.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams();
        }, pp$8.parseClass = function(node, isStatement) {
            this.next();
            var oldStrict = this.strict;
            this.strict = !0, this.parseClassId(node, isStatement), this.parseClassSuper(node);
            var privateNameMap = this.enterClassBody(), classBody = this.startNode(), hadConstructor = !1;
            for(classBody.body = [], this.expect(types$1.braceL); this.type !== types$1.braceR;){
                var element = this.parseClassElement(null !== node.superClass);
                element && (classBody.body.push(element), "MethodDefinition" === element.type && "constructor" === element.kind ? (hadConstructor && this.raiseRecoverable(element.start, "Duplicate constructor in the same class"), hadConstructor = !0) : element.key && "PrivateIdentifier" === element.key.type && isPrivateNameConflicted(privateNameMap, element) && this.raiseRecoverable(element.key.start, "Identifier '#" + element.key.name + "' has already been declared"));
            }
            return this.strict = oldStrict, this.next(), node.body = this.finishNode(classBody, "ClassBody"), this.exitClassBody(), this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression");
        }, pp$8.parseClassElement = function(constructorAllowsSuper) {
            if (this.eat(types$1.semi)) return null;
            var ecmaVersion = this.options.ecmaVersion, node = this.startNode(), keyName = "", isGenerator = !1, isAsync = !1, kind = "method", isStatic = !1;
            if (this.eatContextual("static")) {
                if (ecmaVersion >= 13 && this.eat(types$1.braceL)) return this.parseClassStaticBlock(node), node;
                this.isClassElementNameStart() || this.type === types$1.star ? isStatic = !0 : keyName = "static";
            }
            if (node.static = isStatic, !keyName && ecmaVersion >= 8 && this.eatContextual("async") && (!this.isClassElementNameStart() && this.type !== types$1.star || this.canInsertSemicolon() ? keyName = "async" : isAsync = !0), !keyName && (ecmaVersion >= 9 || !isAsync) && this.eat(types$1.star) && (isGenerator = !0), !keyName && !isAsync && !isGenerator) {
                var lastValue = this.value;
                (this.eatContextual("get") || this.eatContextual("set")) && (this.isClassElementNameStart() ? kind = lastValue : keyName = lastValue);
            }
            if (keyName ? (node.computed = !1, node.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc), node.key.name = keyName, this.finishNode(node.key, "Identifier")) : this.parseClassElementName(node), ecmaVersion < 13 || this.type === types$1.parenL || "method" !== kind || isGenerator || isAsync) {
                var isConstructor = !node.static && checkKeyName(node, "constructor"), allowsDirectSuper = isConstructor && constructorAllowsSuper;
                isConstructor && "method" !== kind && this.raise(node.key.start, "Constructor can't have get/set modifier"), node.kind = isConstructor ? "constructor" : kind, this.parseClassMethod(node, isGenerator, isAsync, allowsDirectSuper);
            } else this.parseClassField(node);
            return node;
        }, pp$8.isClassElementNameStart = function() {
            return this.type === types$1.name || this.type === types$1.privateId || this.type === types$1.num || this.type === types$1.string || this.type === types$1.bracketL || this.type.keyword;
        }, pp$8.parseClassElementName = function(element) {
            this.type === types$1.privateId ? ("constructor" === this.value && this.raise(this.start, "Classes can't have an element named '#constructor'"), element.computed = !1, element.key = this.parsePrivateIdent()) : this.parsePropertyName(element);
        }, pp$8.parseClassMethod = function(method, isGenerator, isAsync, allowsDirectSuper) {
            var key = method.key;
            "constructor" === method.kind ? (isGenerator && this.raise(key.start, "Constructor can't be a generator"), isAsync && this.raise(key.start, "Constructor can't be an async method")) : method.static && checkKeyName(method, "prototype") && this.raise(key.start, "Classes may not have a static property named prototype");
            var value = method.value = this.parseMethod(isGenerator, isAsync, allowsDirectSuper);
            return "get" === method.kind && 0 !== value.params.length && this.raiseRecoverable(value.start, "getter should have no params"), "set" === method.kind && 1 !== value.params.length && this.raiseRecoverable(value.start, "setter should have exactly one param"), "set" === method.kind && "RestElement" === value.params[0].type && this.raiseRecoverable(value.params[0].start, "Setter cannot use rest params"), this.finishNode(method, "MethodDefinition");
        }, pp$8.parseClassField = function(field) {
            if (checkKeyName(field, "constructor") ? this.raise(field.key.start, "Classes can't have a field named 'constructor'") : field.static && checkKeyName(field, "prototype") && this.raise(field.key.start, "Classes can't have a static field named 'prototype'"), this.eat(types$1.eq)) {
                var scope = this.currentThisScope(), inClassFieldInit = scope.inClassFieldInit;
                scope.inClassFieldInit = !0, field.value = this.parseMaybeAssign(), scope.inClassFieldInit = inClassFieldInit;
            } else field.value = null;
            return this.semicolon(), this.finishNode(field, "PropertyDefinition");
        }, pp$8.parseClassStaticBlock = function(node) {
            node.body = [];
            var oldLabels = this.labels;
            for(this.labels = [], this.enterScope(320); this.type !== types$1.braceR;){
                var stmt = this.parseStatement(null);
                node.body.push(stmt);
            }
            return this.next(), this.exitScope(), this.labels = oldLabels, this.finishNode(node, "StaticBlock");
        }, pp$8.parseClassId = function(node, isStatement) {
            this.type === types$1.name ? (node.id = this.parseIdent(), isStatement && this.checkLValSimple(node.id, 2, !1)) : (!0 === isStatement && this.unexpected(), node.id = null);
        }, pp$8.parseClassSuper = function(node) {
            node.superClass = this.eat(types$1._extends) ? this.parseExprSubscripts(null, !1) : null;
        }, pp$8.enterClassBody = function() {
            var element = {
                declared: Object.create(null),
                used: []
            };
            return this.privateNameStack.push(element), element.declared;
        }, pp$8.exitClassBody = function() {
            var ref = this.privateNameStack.pop(), declared = ref.declared, used = ref.used;
            if (this.options.checkPrivateFields) for(var len = this.privateNameStack.length, parent = 0 === len ? null : this.privateNameStack[len - 1], i = 0; i < used.length; ++i){
                var id = used[i];
                hasOwn(declared, id.name) || (parent ? parent.used.push(id) : this.raiseRecoverable(id.start, "Private field '#" + id.name + "' must be declared in an enclosing class"));
            }
        }, pp$8.parseExportAllDeclaration = function(node, exports) {
            return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (node.exported = this.parseModuleExportName(), this.checkExport(exports, node.exported, this.lastTokStart)) : node.exported = null), this.expectContextual("from"), this.type !== types$1.string && this.unexpected(), node.source = this.parseExprAtom(), this.options.ecmaVersion >= 16 && (node.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(node, "ExportAllDeclaration");
        }, pp$8.parseExport = function(node, exports) {
            if (this.next(), this.eat(types$1.star)) return this.parseExportAllDeclaration(node, exports);
            if (this.eat(types$1._default)) return this.checkExport(exports, "default", this.lastTokStart), node.declaration = this.parseExportDefaultDeclaration(), this.finishNode(node, "ExportDefaultDeclaration");
            if (this.shouldParseExportStatement()) node.declaration = this.parseExportDeclaration(node), "VariableDeclaration" === node.declaration.type ? this.checkVariableExport(exports, node.declaration.declarations) : this.checkExport(exports, node.declaration.id, node.declaration.id.start), node.specifiers = [], node.source = null;
            else {
                if (node.declaration = null, node.specifiers = this.parseExportSpecifiers(exports), this.eatContextual("from")) this.type !== types$1.string && this.unexpected(), node.source = this.parseExprAtom(), this.options.ecmaVersion >= 16 && (node.attributes = this.parseWithClause());
                else {
                    for(var i = 0, list = node.specifiers; i < list.length; i += 1){
                        var spec = list[i];
                        this.checkUnreserved(spec.local), this.checkLocalExport(spec.local), "Literal" === spec.local.type && this.raise(spec.local.start, "A string literal cannot be used as an exported binding without `from`.");
                    }
                    node.source = null;
                }
                this.semicolon();
            }
            return this.finishNode(node, "ExportNamedDeclaration");
        }, pp$8.parseExportDeclaration = function(node) {
            return this.parseStatement(null);
        }, pp$8.parseExportDefaultDeclaration = function() {
            var isAsync;
            if (this.type === types$1._function || (isAsync = this.isAsyncFunction())) {
                var fNode = this.startNode();
                return this.next(), isAsync && this.next(), this.parseFunction(fNode, 4 | FUNC_STATEMENT, !1, isAsync);
            }
            if (this.type === types$1._class) {
                var cNode = this.startNode();
                return this.parseClass(cNode, "nullableID");
            }
            var declaration = this.parseMaybeAssign();
            return this.semicolon(), declaration;
        }, pp$8.checkExport = function(exports, name, pos) {
            exports && ("string" != typeof name && (name = "Identifier" === name.type ? name.name : name.value), hasOwn(exports, name) && this.raiseRecoverable(pos, "Duplicate export '" + name + "'"), exports[name] = !0);
        }, pp$8.checkPatternExport = function(exports, pat) {
            var type = pat.type;
            if ("Identifier" === type) this.checkExport(exports, pat, pat.start);
            else if ("ObjectPattern" === type) for(var i = 0, list = pat.properties; i < list.length; i += 1){
                var prop = list[i];
                this.checkPatternExport(exports, prop);
            }
            else if ("ArrayPattern" === type) for(var i$1 = 0, list$1 = pat.elements; i$1 < list$1.length; i$1 += 1){
                var elt = list$1[i$1];
                elt && this.checkPatternExport(exports, elt);
            }
            else "Property" === type ? this.checkPatternExport(exports, pat.value) : "AssignmentPattern" === type ? this.checkPatternExport(exports, pat.left) : "RestElement" === type && this.checkPatternExport(exports, pat.argument);
        }, pp$8.checkVariableExport = function(exports, decls) {
            if (exports) for(var i = 0, list = decls; i < list.length; i += 1){
                var decl = list[i];
                this.checkPatternExport(exports, decl.id);
            }
        }, pp$8.shouldParseExportStatement = function() {
            return "var" === this.type.keyword || "const" === this.type.keyword || "class" === this.type.keyword || "function" === this.type.keyword || this.isLet() || this.isAsyncFunction();
        }, pp$8.parseExportSpecifier = function(exports) {
            var node = this.startNode();
            return node.local = this.parseModuleExportName(), node.exported = this.eatContextual("as") ? this.parseModuleExportName() : node.local, this.checkExport(exports, node.exported, node.exported.start), this.finishNode(node, "ExportSpecifier");
        }, pp$8.parseExportSpecifiers = function(exports) {
            var nodes = [], first = !0;
            for(this.expect(types$1.braceL); !this.eat(types$1.braceR);){
                if (first) first = !1;
                else if (this.expect(types$1.comma), this.afterTrailingComma(types$1.braceR)) break;
                nodes.push(this.parseExportSpecifier(exports));
            }
            return nodes;
        }, pp$8.parseImport = function(node) {
            return this.next(), this.type === types$1.string ? (node.specifiers = empty$1, node.source = this.parseExprAtom()) : (node.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), node.source = this.type === types$1.string ? this.parseExprAtom() : this.unexpected()), this.options.ecmaVersion >= 16 && (node.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(node, "ImportDeclaration");
        }, pp$8.parseImportSpecifier = function() {
            var node = this.startNode();
            return node.imported = this.parseModuleExportName(), this.eatContextual("as") ? node.local = this.parseIdent() : (this.checkUnreserved(node.imported), node.local = node.imported), this.checkLValSimple(node.local, 2), this.finishNode(node, "ImportSpecifier");
        }, pp$8.parseImportDefaultSpecifier = function() {
            var node = this.startNode();
            return node.local = this.parseIdent(), this.checkLValSimple(node.local, 2), this.finishNode(node, "ImportDefaultSpecifier");
        }, pp$8.parseImportNamespaceSpecifier = function() {
            var node = this.startNode();
            return this.next(), this.expectContextual("as"), node.local = this.parseIdent(), this.checkLValSimple(node.local, 2), this.finishNode(node, "ImportNamespaceSpecifier");
        }, pp$8.parseImportSpecifiers = function() {
            var nodes = [], first = !0;
            if (this.type === types$1.name && (nodes.push(this.parseImportDefaultSpecifier()), !this.eat(types$1.comma))) return nodes;
            if (this.type === types$1.star) return nodes.push(this.parseImportNamespaceSpecifier()), nodes;
            for(this.expect(types$1.braceL); !this.eat(types$1.braceR);){
                if (first) first = !1;
                else if (this.expect(types$1.comma), this.afterTrailingComma(types$1.braceR)) break;
                nodes.push(this.parseImportSpecifier());
            }
            return nodes;
        }, pp$8.parseWithClause = function() {
            var nodes = [];
            if (!this.eat(types$1._with)) return nodes;
            this.expect(types$1.braceL);
            for(var attributeKeys = {}, first = !0; !this.eat(types$1.braceR);){
                if (first) first = !1;
                else if (this.expect(types$1.comma), this.afterTrailingComma(types$1.braceR)) break;
                var attr = this.parseImportAttribute(), keyName = "Identifier" === attr.key.type ? attr.key.name : attr.key.value;
                hasOwn(attributeKeys, keyName) && this.raiseRecoverable(attr.key.start, "Duplicate attribute key '" + keyName + "'"), attributeKeys[keyName] = !0, nodes.push(attr);
            }
            return nodes;
        }, pp$8.parseImportAttribute = function() {
            var node = this.startNode();
            return node.key = this.type === types$1.string ? this.parseExprAtom() : this.parseIdent("never" !== this.options.allowReserved), this.expect(types$1.colon), this.type !== types$1.string && this.unexpected(), node.value = this.parseExprAtom(), this.finishNode(node, "ImportAttribute");
        }, pp$8.parseModuleExportName = function() {
            if (this.options.ecmaVersion >= 13 && this.type === types$1.string) {
                var stringLiteral = this.parseLiteral(this.value);
                return loneSurrogate.test(stringLiteral.value) && this.raise(stringLiteral.start, "An export name cannot include a lone surrogate."), stringLiteral;
            }
            return this.parseIdent(!0);
        }, pp$8.adaptDirectivePrologue = function(statements) {
            for(var i = 0; i < statements.length && this.isDirectiveCandidate(statements[i]); ++i)statements[i].directive = statements[i].expression.raw.slice(1, -1);
        }, pp$8.isDirectiveCandidate = function(statement) {
            return this.options.ecmaVersion >= 5 && "ExpressionStatement" === statement.type && "Literal" === statement.expression.type && "string" == typeof statement.expression.value && ('"' === this.input[statement.start] || "'" === this.input[statement.start]);
        };
        var pp$7 = Parser.prototype;
        pp$7.toAssignable = function(node, isBinding, refDestructuringErrors) {
            if (this.options.ecmaVersion >= 6 && node) switch(node.type){
                case "Identifier":
                    this.inAsync && "await" === node.name && this.raise(node.start, "Cannot use 'await' as identifier inside an async function");
                    break;
                case "ObjectPattern":
                case "ArrayPattern":
                case "AssignmentPattern":
                case "RestElement":
                    break;
                case "ObjectExpression":
                    node.type = "ObjectPattern", refDestructuringErrors && this.checkPatternErrors(refDestructuringErrors, !0);
                    for(var i = 0, list = node.properties; i < list.length; i += 1){
                        var prop = list[i];
                        this.toAssignable(prop, isBinding), "RestElement" !== prop.type || "ArrayPattern" !== prop.argument.type && "ObjectPattern" !== prop.argument.type || this.raise(prop.argument.start, "Unexpected token");
                    }
                    break;
                case "Property":
                    "init" !== node.kind && this.raise(node.key.start, "Object pattern can't contain getter or setter"), this.toAssignable(node.value, isBinding);
                    break;
                case "ArrayExpression":
                    node.type = "ArrayPattern", refDestructuringErrors && this.checkPatternErrors(refDestructuringErrors, !0), this.toAssignableList(node.elements, isBinding);
                    break;
                case "SpreadElement":
                    node.type = "RestElement", this.toAssignable(node.argument, isBinding), "AssignmentPattern" === node.argument.type && this.raise(node.argument.start, "Rest elements cannot have a default value");
                    break;
                case "AssignmentExpression":
                    "=" !== node.operator && this.raise(node.left.end, "Only '=' operator can be used for specifying default value."), node.type = "AssignmentPattern", delete node.operator, this.toAssignable(node.left, isBinding);
                    break;
                case "ParenthesizedExpression":
                    this.toAssignable(node.expression, isBinding, refDestructuringErrors);
                    break;
                case "ChainExpression":
                    this.raiseRecoverable(node.start, "Optional chaining cannot appear in left-hand side");
                    break;
                case "MemberExpression":
                    if (!isBinding) break;
                default:
                    this.raise(node.start, "Assigning to rvalue");
            }
            else refDestructuringErrors && this.checkPatternErrors(refDestructuringErrors, !0);
            return node;
        }, pp$7.toAssignableList = function(exprList, isBinding) {
            for(var end = exprList.length, i = 0; i < end; i++){
                var elt = exprList[i];
                elt && this.toAssignable(elt, isBinding);
            }
            if (end) {
                var last = exprList[end - 1];
                6 === this.options.ecmaVersion && isBinding && last && "RestElement" === last.type && "Identifier" !== last.argument.type && this.unexpected(last.argument.start);
            }
            return exprList;
        }, pp$7.parseSpread = function(refDestructuringErrors) {
            var node = this.startNode();
            return this.next(), node.argument = this.parseMaybeAssign(!1, refDestructuringErrors), this.finishNode(node, "SpreadElement");
        }, pp$7.parseRestBinding = function() {
            var node = this.startNode();
            return this.next(), 6 === this.options.ecmaVersion && this.type !== types$1.name && this.unexpected(), node.argument = this.parseBindingAtom(), this.finishNode(node, "RestElement");
        }, pp$7.parseBindingAtom = function() {
            if (this.options.ecmaVersion >= 6) switch(this.type){
                case types$1.bracketL:
                    var node = this.startNode();
                    return this.next(), node.elements = this.parseBindingList(types$1.bracketR, !0, !0), this.finishNode(node, "ArrayPattern");
                case types$1.braceL:
                    return this.parseObj(!0);
            }
            return this.parseIdent();
        }, pp$7.parseBindingList = function(close, allowEmpty, allowTrailingComma, allowModifiers) {
            for(var elts = [], first = !0; !this.eat(close);)if (first ? first = !1 : this.expect(types$1.comma), allowEmpty && this.type === types$1.comma) elts.push(null);
            else {
                if (allowTrailingComma && this.afterTrailingComma(close)) break;
                if (this.type === types$1.ellipsis) {
                    var rest = this.parseRestBinding();
                    this.parseBindingListItem(rest), elts.push(rest), this.type === types$1.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.expect(close);
                    break;
                }
                elts.push(this.parseAssignableListItem(allowModifiers));
            }
            return elts;
        }, pp$7.parseAssignableListItem = function(allowModifiers) {
            var elem = this.parseMaybeDefault(this.start, this.startLoc);
            return this.parseBindingListItem(elem), elem;
        }, pp$7.parseBindingListItem = function(param) {
            return param;
        }, pp$7.parseMaybeDefault = function(startPos, startLoc, left) {
            if (left = left || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(types$1.eq)) return left;
            var node = this.startNodeAt(startPos, startLoc);
            return node.left = left, node.right = this.parseMaybeAssign(), this.finishNode(node, "AssignmentPattern");
        }, pp$7.checkLValSimple = function(expr, bindingType, checkClashes) {
            void 0 === bindingType && (bindingType = 0);
            var isBind = 0 !== bindingType;
            switch(expr.type){
                case "Identifier":
                    this.strict && this.reservedWordsStrictBind.test(expr.name) && this.raiseRecoverable(expr.start, (isBind ? "Binding " : "Assigning to ") + expr.name + " in strict mode"), isBind && (2 === bindingType && "let" === expr.name && this.raiseRecoverable(expr.start, "let is disallowed as a lexically bound name"), checkClashes && (hasOwn(checkClashes, expr.name) && this.raiseRecoverable(expr.start, "Argument name clash"), checkClashes[expr.name] = !0), 5 !== bindingType && this.declareName(expr.name, bindingType, expr.start));
                    break;
                case "ChainExpression":
                    this.raiseRecoverable(expr.start, "Optional chaining cannot appear in left-hand side");
                    break;
                case "MemberExpression":
                    isBind && this.raiseRecoverable(expr.start, "Binding member expression");
                    break;
                case "ParenthesizedExpression":
                    return isBind && this.raiseRecoverable(expr.start, "Binding parenthesized expression"), this.checkLValSimple(expr.expression, bindingType, checkClashes);
                default:
                    this.raise(expr.start, (isBind ? "Binding" : "Assigning to") + " rvalue");
            }
        }, pp$7.checkLValPattern = function(expr, bindingType, checkClashes) {
            switch(void 0 === bindingType && (bindingType = 0), expr.type){
                case "ObjectPattern":
                    for(var i = 0, list = expr.properties; i < list.length; i += 1){
                        var prop = list[i];
                        this.checkLValInnerPattern(prop, bindingType, checkClashes);
                    }
                    break;
                case "ArrayPattern":
                    for(var i$1 = 0, list$1 = expr.elements; i$1 < list$1.length; i$1 += 1){
                        var elem = list$1[i$1];
                        elem && this.checkLValInnerPattern(elem, bindingType, checkClashes);
                    }
                    break;
                default:
                    this.checkLValSimple(expr, bindingType, checkClashes);
            }
        }, pp$7.checkLValInnerPattern = function(expr, bindingType, checkClashes) {
            switch(void 0 === bindingType && (bindingType = 0), expr.type){
                case "Property":
                    this.checkLValInnerPattern(expr.value, bindingType, checkClashes);
                    break;
                case "AssignmentPattern":
                    this.checkLValPattern(expr.left, bindingType, checkClashes);
                    break;
                case "RestElement":
                    this.checkLValPattern(expr.argument, bindingType, checkClashes);
                    break;
                default:
                    this.checkLValPattern(expr, bindingType, checkClashes);
            }
        };
        var TokContext = function(token, isExpr, preserveSpace, override, generator) {
            this.token = token, this.isExpr = !!isExpr, this.preserveSpace = !!preserveSpace, this.override = override, this.generator = !!generator;
        }, types = {
            b_stat: new TokContext("{", !1),
            b_expr: new TokContext("{", !0),
            b_tmpl: new TokContext("${", !1),
            p_stat: new TokContext("(", !1),
            p_expr: new TokContext("(", !0),
            q_tmpl: new TokContext("`", !0, !0, function(p) {
                return p.tryReadTemplateToken();
            }),
            f_stat: new TokContext("function", !1),
            f_expr: new TokContext("function", !0),
            f_expr_gen: new TokContext("function", !0, !1, null, !0),
            f_gen: new TokContext("function", !1, !1, null, !0)
        }, pp$6 = Parser.prototype;
        pp$6.initialContext = function() {
            return [
                types.b_stat
            ];
        }, pp$6.curContext = function() {
            return this.context[this.context.length - 1];
        }, pp$6.braceIsBlock = function(prevType) {
            var parent = this.curContext();
            return parent === types.f_expr || parent === types.f_stat || (prevType !== types$1.colon || parent !== types.b_stat && parent !== types.b_expr ? prevType === types$1._return || prevType === types$1.name && this.exprAllowed ? lineBreak.test(this.input.slice(this.lastTokEnd, this.start)) : prevType === types$1._else || prevType === types$1.semi || prevType === types$1.eof || prevType === types$1.parenR || prevType === types$1.arrow || (prevType === types$1.braceL ? parent === types.b_stat : prevType !== types$1._var && prevType !== types$1._const && prevType !== types$1.name && !this.exprAllowed) : !parent.isExpr);
        }, pp$6.inGeneratorContext = function() {
            for(var i = this.context.length - 1; i >= 1; i--){
                var context = this.context[i];
                if ("function" === context.token) return context.generator;
            }
            return !1;
        }, pp$6.updateContext = function(prevType) {
            var update, type = this.type;
            type.keyword && prevType === types$1.dot ? this.exprAllowed = !1 : (update = type.updateContext) ? update.call(this, prevType) : this.exprAllowed = type.beforeExpr;
        }, pp$6.overrideContext = function(tokenCtx) {
            this.curContext() !== tokenCtx && (this.context[this.context.length - 1] = tokenCtx);
        }, types$1.parenR.updateContext = types$1.braceR.updateContext = function() {
            if (1 !== this.context.length) {
                var out = this.context.pop();
                out === types.b_stat && "function" === this.curContext().token && (out = this.context.pop()), this.exprAllowed = !out.isExpr;
            } else this.exprAllowed = !0;
        }, types$1.braceL.updateContext = function(prevType) {
            this.context.push(this.braceIsBlock(prevType) ? types.b_stat : types.b_expr), this.exprAllowed = !0;
        }, types$1.dollarBraceL.updateContext = function() {
            this.context.push(types.b_tmpl), this.exprAllowed = !0;
        }, types$1.parenL.updateContext = function(prevType) {
            var statementParens = prevType === types$1._if || prevType === types$1._for || prevType === types$1._with || prevType === types$1._while;
            this.context.push(statementParens ? types.p_stat : types.p_expr), this.exprAllowed = !0;
        }, types$1.incDec.updateContext = function() {}, types$1._function.updateContext = types$1._class.updateContext = function(prevType) {
            !prevType.beforeExpr || prevType === types$1._else || prevType === types$1.semi && this.curContext() !== types.p_stat || prevType === types$1._return && lineBreak.test(this.input.slice(this.lastTokEnd, this.start)) || (prevType === types$1.colon || prevType === types$1.braceL) && this.curContext() === types.b_stat ? this.context.push(types.f_stat) : this.context.push(types.f_expr), this.exprAllowed = !1;
        }, types$1.colon.updateContext = function() {
            "function" === this.curContext().token && this.context.pop(), this.exprAllowed = !0;
        }, types$1.backQuote.updateContext = function() {
            this.curContext() === types.q_tmpl ? this.context.pop() : this.context.push(types.q_tmpl), this.exprAllowed = !1;
        }, types$1.star.updateContext = function(prevType) {
            if (prevType === types$1._function) {
                var index = this.context.length - 1;
                this.context[index] === types.f_expr ? this.context[index] = types.f_expr_gen : this.context[index] = types.f_gen;
            }
            this.exprAllowed = !0;
        }, types$1.name.updateContext = function(prevType) {
            var allowed = !1;
            this.options.ecmaVersion >= 6 && prevType !== types$1.dot && ("of" === this.value && !this.exprAllowed || "yield" === this.value && this.inGeneratorContext()) && (allowed = !0), this.exprAllowed = allowed;
        };
        var pp$5 = Parser.prototype;
        function isLocalVariableAccess(node) {
            return "Identifier" === node.type || "ParenthesizedExpression" === node.type && isLocalVariableAccess(node.expression);
        }
        function isPrivateFieldAccess(node) {
            return "MemberExpression" === node.type && "PrivateIdentifier" === node.property.type || "ChainExpression" === node.type && isPrivateFieldAccess(node.expression) || "ParenthesizedExpression" === node.type && isPrivateFieldAccess(node.expression);
        }
        pp$5.checkPropClash = function(prop, propHash, refDestructuringErrors) {
            if (!(this.options.ecmaVersion >= 9 && "SpreadElement" === prop.type || this.options.ecmaVersion >= 6 && (prop.computed || prop.method || prop.shorthand))) {
                var name, key = prop.key;
                switch(key.type){
                    case "Identifier":
                        name = key.name;
                        break;
                    case "Literal":
                        name = String(key.value);
                        break;
                    default:
                        return;
                }
                var kind = prop.kind;
                if (this.options.ecmaVersion >= 6) "__proto__" === name && "init" === kind && (propHash.proto && (refDestructuringErrors ? refDestructuringErrors.doubleProto < 0 && (refDestructuringErrors.doubleProto = key.start) : this.raiseRecoverable(key.start, "Redefinition of __proto__ property")), propHash.proto = !0);
                else {
                    var other = propHash[name = "$" + name];
                    if (other) ("init" === kind ? this.strict && other.init || other.get || other.set : other.init || other[kind]) && this.raiseRecoverable(key.start, "Redefinition of property");
                    else other = propHash[name] = {
                        init: !1,
                        get: !1,
                        set: !1
                    };
                    other[kind] = !0;
                }
            }
        }, pp$5.parseExpression = function(forInit, refDestructuringErrors) {
            var startPos = this.start, startLoc = this.startLoc, expr = this.parseMaybeAssign(forInit, refDestructuringErrors);
            if (this.type === types$1.comma) {
                var node = this.startNodeAt(startPos, startLoc);
                for(node.expressions = [
                    expr
                ]; this.eat(types$1.comma);)node.expressions.push(this.parseMaybeAssign(forInit, refDestructuringErrors));
                return this.finishNode(node, "SequenceExpression");
            }
            return expr;
        }, pp$5.parseMaybeAssign = function(forInit, refDestructuringErrors, afterLeftParse) {
            if (this.isContextual("yield")) {
                if (this.inGenerator) return this.parseYield(forInit);
                this.exprAllowed = !1;
            }
            var ownDestructuringErrors = !1, oldParenAssign = -1, oldTrailingComma = -1, oldDoubleProto = -1;
            refDestructuringErrors ? (oldParenAssign = refDestructuringErrors.parenthesizedAssign, oldTrailingComma = refDestructuringErrors.trailingComma, oldDoubleProto = refDestructuringErrors.doubleProto, refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = -1) : (refDestructuringErrors = new DestructuringErrors, ownDestructuringErrors = !0);
            var startPos = this.start, startLoc = this.startLoc;
            this.type !== types$1.parenL && this.type !== types$1.name || (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = "await" === forInit);
            var left = this.parseMaybeConditional(forInit, refDestructuringErrors);
            if (afterLeftParse && (left = afterLeftParse.call(this, left, startPos, startLoc)), this.type.isAssign) {
                var node = this.startNodeAt(startPos, startLoc);
                return node.operator = this.value, this.type === types$1.eq && (left = this.toAssignable(left, !1, refDestructuringErrors)), ownDestructuringErrors || (refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = refDestructuringErrors.doubleProto = -1), refDestructuringErrors.shorthandAssign >= left.start && (refDestructuringErrors.shorthandAssign = -1), this.type === types$1.eq ? this.checkLValPattern(left) : this.checkLValSimple(left), node.left = left, this.next(), node.right = this.parseMaybeAssign(forInit), oldDoubleProto > -1 && (refDestructuringErrors.doubleProto = oldDoubleProto), this.finishNode(node, "AssignmentExpression");
            }
            return ownDestructuringErrors && this.checkExpressionErrors(refDestructuringErrors, !0), oldParenAssign > -1 && (refDestructuringErrors.parenthesizedAssign = oldParenAssign), oldTrailingComma > -1 && (refDestructuringErrors.trailingComma = oldTrailingComma), left;
        }, pp$5.parseMaybeConditional = function(forInit, refDestructuringErrors) {
            var startPos = this.start, startLoc = this.startLoc, expr = this.parseExprOps(forInit, refDestructuringErrors);
            if (this.checkExpressionErrors(refDestructuringErrors)) return expr;
            if (this.eat(types$1.question)) {
                var node = this.startNodeAt(startPos, startLoc);
                return node.test = expr, node.consequent = this.parseMaybeAssign(), this.expect(types$1.colon), node.alternate = this.parseMaybeAssign(forInit), this.finishNode(node, "ConditionalExpression");
            }
            return expr;
        }, pp$5.parseExprOps = function(forInit, refDestructuringErrors) {
            var startPos = this.start, startLoc = this.startLoc, expr = this.parseMaybeUnary(refDestructuringErrors, !1, !1, forInit);
            return this.checkExpressionErrors(refDestructuringErrors) || expr.start === startPos && "ArrowFunctionExpression" === expr.type ? expr : this.parseExprOp(expr, startPos, startLoc, -1, forInit);
        }, pp$5.parseExprOp = function(left, leftStartPos, leftStartLoc, minPrec, forInit) {
            var prec = this.type.binop;
            if (null != prec && (!forInit || this.type !== types$1._in) && prec > minPrec) {
                var logical = this.type === types$1.logicalOR || this.type === types$1.logicalAND, coalesce = this.type === types$1.coalesce;
                coalesce && (prec = types$1.logicalAND.binop);
                var op = this.value;
                this.next();
                var startPos = this.start, startLoc = this.startLoc, right = this.parseExprOp(this.parseMaybeUnary(null, !1, !1, forInit), startPos, startLoc, prec, forInit), node = this.buildBinary(leftStartPos, leftStartLoc, left, right, op, logical || coalesce);
                return (logical && this.type === types$1.coalesce || coalesce && (this.type === types$1.logicalOR || this.type === types$1.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec, forInit);
            }
            return left;
        }, pp$5.buildBinary = function(startPos, startLoc, left, right, op, logical) {
            "PrivateIdentifier" === right.type && this.raise(right.start, "Private identifier can only be left side of binary expression");
            var node = this.startNodeAt(startPos, startLoc);
            return node.left = left, node.operator = op, node.right = right, this.finishNode(node, logical ? "LogicalExpression" : "BinaryExpression");
        }, pp$5.parseMaybeUnary = function(refDestructuringErrors, sawUnary, incDec, forInit) {
            var expr, startPos = this.start, startLoc = this.startLoc;
            if (this.isContextual("await") && this.canAwait) expr = this.parseAwait(forInit), sawUnary = !0;
            else if (this.type.prefix) {
                var node = this.startNode(), update = this.type === types$1.incDec;
                node.operator = this.value, node.prefix = !0, this.next(), node.argument = this.parseMaybeUnary(null, !0, update, forInit), this.checkExpressionErrors(refDestructuringErrors, !0), update ? this.checkLValSimple(node.argument) : this.strict && "delete" === node.operator && isLocalVariableAccess(node.argument) ? this.raiseRecoverable(node.start, "Deleting local variable in strict mode") : "delete" === node.operator && isPrivateFieldAccess(node.argument) ? this.raiseRecoverable(node.start, "Private fields can not be deleted") : sawUnary = !0, expr = this.finishNode(node, update ? "UpdateExpression" : "UnaryExpression");
            } else if (sawUnary || this.type !== types$1.privateId) {
                if (expr = this.parseExprSubscripts(refDestructuringErrors, forInit), this.checkExpressionErrors(refDestructuringErrors)) return expr;
                for(; this.type.postfix && !this.canInsertSemicolon();){
                    var node$1 = this.startNodeAt(startPos, startLoc);
                    node$1.operator = this.value, node$1.prefix = !1, node$1.argument = expr, this.checkLValSimple(expr), this.next(), expr = this.finishNode(node$1, "UpdateExpression");
                }
            } else (forInit || 0 === this.privateNameStack.length) && this.options.checkPrivateFields && this.unexpected(), expr = this.parsePrivateIdent(), this.type !== types$1._in && this.unexpected();
            return incDec || !this.eat(types$1.starstar) ? expr : sawUnary ? void this.unexpected(this.lastTokStart) : this.buildBinary(startPos, startLoc, expr, this.parseMaybeUnary(null, !1, !1, forInit), "**", !1);
        }, pp$5.parseExprSubscripts = function(refDestructuringErrors, forInit) {
            var startPos = this.start, startLoc = this.startLoc, expr = this.parseExprAtom(refDestructuringErrors, forInit);
            if ("ArrowFunctionExpression" === expr.type && ")" !== this.input.slice(this.lastTokStart, this.lastTokEnd)) return expr;
            var result = this.parseSubscripts(expr, startPos, startLoc, !1, forInit);
            return refDestructuringErrors && "MemberExpression" === result.type && (refDestructuringErrors.parenthesizedAssign >= result.start && (refDestructuringErrors.parenthesizedAssign = -1), refDestructuringErrors.parenthesizedBind >= result.start && (refDestructuringErrors.parenthesizedBind = -1), refDestructuringErrors.trailingComma >= result.start && (refDestructuringErrors.trailingComma = -1)), result;
        }, pp$5.parseSubscripts = function(base, startPos, startLoc, noCalls, forInit) {
            for(var maybeAsyncArrow = this.options.ecmaVersion >= 8 && "Identifier" === base.type && "async" === base.name && this.lastTokEnd === base.end && !this.canInsertSemicolon() && base.end - base.start == 5 && this.potentialArrowAt === base.start, optionalChained = !1;;){
                var element = this.parseSubscript(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained, forInit);
                if (element.optional && (optionalChained = !0), element === base || "ArrowFunctionExpression" === element.type) {
                    if (optionalChained) {
                        var chainNode = this.startNodeAt(startPos, startLoc);
                        chainNode.expression = element, element = this.finishNode(chainNode, "ChainExpression");
                    }
                    return element;
                }
                base = element;
            }
        }, pp$5.shouldParseAsyncArrow = function() {
            return !this.canInsertSemicolon() && this.eat(types$1.arrow);
        }, pp$5.parseSubscriptAsyncArrow = function(startPos, startLoc, exprList, forInit) {
            return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, !0, forInit);
        }, pp$5.parseSubscript = function(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained, forInit) {
            var optionalSupported = this.options.ecmaVersion >= 11, optional = optionalSupported && this.eat(types$1.questionDot);
            noCalls && optional && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
            var computed = this.eat(types$1.bracketL);
            if (computed || optional && this.type !== types$1.parenL && this.type !== types$1.backQuote || this.eat(types$1.dot)) {
                var node = this.startNodeAt(startPos, startLoc);
                node.object = base, computed ? (node.property = this.parseExpression(), this.expect(types$1.bracketR)) : this.type === types$1.privateId && "Super" !== base.type ? node.property = this.parsePrivateIdent() : node.property = this.parseIdent("never" !== this.options.allowReserved), node.computed = !!computed, optionalSupported && (node.optional = optional), base = this.finishNode(node, "MemberExpression");
            } else if (!noCalls && this.eat(types$1.parenL)) {
                var refDestructuringErrors = new DestructuringErrors, oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
                this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
                var exprList = this.parseExprList(types$1.parenR, this.options.ecmaVersion >= 8, !1, refDestructuringErrors);
                if (maybeAsyncArrow && !optional && this.shouldParseAsyncArrow()) return this.checkPatternErrors(refDestructuringErrors, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = oldYieldPos, this.awaitPos = oldAwaitPos, this.awaitIdentPos = oldAwaitIdentPos, this.parseSubscriptAsyncArrow(startPos, startLoc, exprList, forInit);
                this.checkExpressionErrors(refDestructuringErrors, !0), this.yieldPos = oldYieldPos || this.yieldPos, this.awaitPos = oldAwaitPos || this.awaitPos, this.awaitIdentPos = oldAwaitIdentPos || this.awaitIdentPos;
                var node$1 = this.startNodeAt(startPos, startLoc);
                node$1.callee = base, node$1.arguments = exprList, optionalSupported && (node$1.optional = optional), base = this.finishNode(node$1, "CallExpression");
            } else if (this.type === types$1.backQuote) {
                (optional || optionalChained) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
                var node$2 = this.startNodeAt(startPos, startLoc);
                node$2.tag = base, node$2.quasi = this.parseTemplate({
                    isTagged: !0
                }), base = this.finishNode(node$2, "TaggedTemplateExpression");
            }
            return base;
        }, pp$5.parseExprAtom = function(refDestructuringErrors, forInit, forNew) {
            this.type === types$1.slash && this.readRegexp();
            var node, canBeArrow = this.potentialArrowAt === this.start;
            switch(this.type){
                case types$1._super:
                    return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), node = this.startNode(), this.next(), this.type !== types$1.parenL || this.allowDirectSuper || this.raise(node.start, "super() call outside constructor of a subclass"), this.type !== types$1.dot && this.type !== types$1.bracketL && this.type !== types$1.parenL && this.unexpected(), this.finishNode(node, "Super");
                case types$1._this:
                    return node = this.startNode(), this.next(), this.finishNode(node, "ThisExpression");
                case types$1.name:
                    var startPos = this.start, startLoc = this.startLoc, containsEsc = this.containsEsc, id = this.parseIdent(!1);
                    if (this.options.ecmaVersion >= 8 && !containsEsc && "async" === id.name && !this.canInsertSemicolon() && this.eat(types$1._function)) return this.overrideContext(types.f_expr), this.parseFunction(this.startNodeAt(startPos, startLoc), 0, !1, !0, forInit);
                    if (canBeArrow && !this.canInsertSemicolon()) {
                        if (this.eat(types$1.arrow)) return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [
                            id
                        ], !1, forInit);
                        if (this.options.ecmaVersion >= 8 && "async" === id.name && this.type === types$1.name && !containsEsc && (!this.potentialArrowInForAwait || "of" !== this.value || this.containsEsc)) return id = this.parseIdent(!1), !this.canInsertSemicolon() && this.eat(types$1.arrow) || this.unexpected(), this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [
                            id
                        ], !0, forInit);
                    }
                    return id;
                case types$1.regexp:
                    var value = this.value;
                    return (node = this.parseLiteral(value.value)).regex = {
                        pattern: value.pattern,
                        flags: value.flags
                    }, node;
                case types$1.num:
                case types$1.string:
                    return this.parseLiteral(this.value);
                case types$1._null:
                case types$1._true:
                case types$1._false:
                    return (node = this.startNode()).value = this.type === types$1._null ? null : this.type === types$1._true, node.raw = this.type.keyword, this.next(), this.finishNode(node, "Literal");
                case types$1.parenL:
                    var start = this.start, expr = this.parseParenAndDistinguishExpression(canBeArrow, forInit);
                    return refDestructuringErrors && (refDestructuringErrors.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(expr) && (refDestructuringErrors.parenthesizedAssign = start), refDestructuringErrors.parenthesizedBind < 0 && (refDestructuringErrors.parenthesizedBind = start)), expr;
                case types$1.bracketL:
                    return node = this.startNode(), this.next(), node.elements = this.parseExprList(types$1.bracketR, !0, !0, refDestructuringErrors), this.finishNode(node, "ArrayExpression");
                case types$1.braceL:
                    return this.overrideContext(types.b_expr), this.parseObj(!1, refDestructuringErrors);
                case types$1._function:
                    return node = this.startNode(), this.next(), this.parseFunction(node, 0);
                case types$1._class:
                    return this.parseClass(this.startNode(), !1);
                case types$1._new:
                    return this.parseNew();
                case types$1.backQuote:
                    return this.parseTemplate();
                case types$1._import:
                    return this.options.ecmaVersion >= 11 ? this.parseExprImport(forNew) : this.unexpected();
                default:
                    return this.parseExprAtomDefault();
            }
        }, pp$5.parseExprAtomDefault = function() {
            this.unexpected();
        }, pp$5.parseExprImport = function(forNew) {
            var node = this.startNode();
            if (this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import"), this.next(), this.type === types$1.parenL && !forNew) return this.parseDynamicImport(node);
            if (this.type === types$1.dot) {
                var meta = this.startNodeAt(node.start, node.loc && node.loc.start);
                return meta.name = "import", node.meta = this.finishNode(meta, "Identifier"), this.parseImportMeta(node);
            }
            this.unexpected();
        }, pp$5.parseDynamicImport = function(node) {
            if (this.next(), node.source = this.parseMaybeAssign(), this.options.ecmaVersion >= 16) this.eat(types$1.parenR) ? node.options = null : (this.expect(types$1.comma), this.afterTrailingComma(types$1.parenR) ? node.options = null : (node.options = this.parseMaybeAssign(), this.eat(types$1.parenR) || (this.expect(types$1.comma), this.afterTrailingComma(types$1.parenR) || this.unexpected())));
            else if (!this.eat(types$1.parenR)) {
                var errorPos = this.start;
                this.eat(types$1.comma) && this.eat(types$1.parenR) ? this.raiseRecoverable(errorPos, "Trailing comma is not allowed in import()") : this.unexpected(errorPos);
            }
            return this.finishNode(node, "ImportExpression");
        }, pp$5.parseImportMeta = function(node) {
            this.next();
            var containsEsc = this.containsEsc;
            return node.property = this.parseIdent(!0), "meta" !== node.property.name && this.raiseRecoverable(node.property.start, "The only valid meta property for import is 'import.meta'"), containsEsc && this.raiseRecoverable(node.start, "'import.meta' must not contain escaped characters"), "module" === this.options.sourceType || this.options.allowImportExportEverywhere || this.raiseRecoverable(node.start, "Cannot use 'import.meta' outside a module"), this.finishNode(node, "MetaProperty");
        }, pp$5.parseLiteral = function(value) {
            var node = this.startNode();
            return node.value = value, node.raw = this.input.slice(this.start, this.end), 110 === node.raw.charCodeAt(node.raw.length - 1) && (node.bigint = node.raw.slice(0, -1).replace(/_/g, "")), this.next(), this.finishNode(node, "Literal");
        }, pp$5.parseParenExpression = function() {
            this.expect(types$1.parenL);
            var val = this.parseExpression();
            return this.expect(types$1.parenR), val;
        }, pp$5.shouldParseArrow = function(exprList) {
            return !this.canInsertSemicolon();
        }, pp$5.parseParenAndDistinguishExpression = function(canBeArrow, forInit) {
            var val, startPos = this.start, startLoc = this.startLoc, allowTrailingComma = this.options.ecmaVersion >= 8;
            if (this.options.ecmaVersion >= 6) {
                this.next();
                var spreadStart, innerStartPos = this.start, innerStartLoc = this.startLoc, exprList = [], first = !0, lastIsComma = !1, refDestructuringErrors = new DestructuringErrors, oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos;
                for(this.yieldPos = 0, this.awaitPos = 0; this.type !== types$1.parenR;){
                    if (first ? first = !1 : this.expect(types$1.comma), allowTrailingComma && this.afterTrailingComma(types$1.parenR, !0)) {
                        lastIsComma = !0;
                        break;
                    }
                    if (this.type === types$1.ellipsis) {
                        spreadStart = this.start, exprList.push(this.parseParenItem(this.parseRestBinding())), this.type === types$1.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
                        break;
                    }
                    exprList.push(this.parseMaybeAssign(!1, refDestructuringErrors, this.parseParenItem));
                }
                var innerEndPos = this.lastTokEnd, innerEndLoc = this.lastTokEndLoc;
                if (this.expect(types$1.parenR), canBeArrow && this.shouldParseArrow(exprList) && this.eat(types$1.arrow)) return this.checkPatternErrors(refDestructuringErrors, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = oldYieldPos, this.awaitPos = oldAwaitPos, this.parseParenArrowList(startPos, startLoc, exprList, forInit);
                exprList.length && !lastIsComma || this.unexpected(this.lastTokStart), spreadStart && this.unexpected(spreadStart), this.checkExpressionErrors(refDestructuringErrors, !0), this.yieldPos = oldYieldPos || this.yieldPos, this.awaitPos = oldAwaitPos || this.awaitPos, exprList.length > 1 ? ((val = this.startNodeAt(innerStartPos, innerStartLoc)).expressions = exprList, this.finishNodeAt(val, "SequenceExpression", innerEndPos, innerEndLoc)) : val = exprList[0];
            } else val = this.parseParenExpression();
            if (this.options.preserveParens) {
                var par = this.startNodeAt(startPos, startLoc);
                return par.expression = val, this.finishNode(par, "ParenthesizedExpression");
            }
            return val;
        }, pp$5.parseParenItem = function(item) {
            return item;
        }, pp$5.parseParenArrowList = function(startPos, startLoc, exprList, forInit) {
            return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, !1, forInit);
        };
        var empty = [];
        pp$5.parseNew = function() {
            this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
            var node = this.startNode();
            if (this.next(), this.options.ecmaVersion >= 6 && this.type === types$1.dot) {
                var meta = this.startNodeAt(node.start, node.loc && node.loc.start);
                meta.name = "new", node.meta = this.finishNode(meta, "Identifier"), this.next();
                var containsEsc = this.containsEsc;
                return node.property = this.parseIdent(!0), "target" !== node.property.name && this.raiseRecoverable(node.property.start, "The only valid meta property for new is 'new.target'"), containsEsc && this.raiseRecoverable(node.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(node.start, "'new.target' can only be used in functions and class static block"), this.finishNode(node, "MetaProperty");
            }
            var startPos = this.start, startLoc = this.startLoc;
            return node.callee = this.parseSubscripts(this.parseExprAtom(null, !1, !0), startPos, startLoc, !0, !1), this.eat(types$1.parenL) ? node.arguments = this.parseExprList(types$1.parenR, this.options.ecmaVersion >= 8, !1) : node.arguments = empty, this.finishNode(node, "NewExpression");
        }, pp$5.parseTemplateElement = function(ref) {
            var isTagged = ref.isTagged, elem = this.startNode();
            return this.type === types$1.invalidTemplate ? (isTagged || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), elem.value = {
                raw: this.value.replace(/\r\n?/g, "\n"),
                cooked: null
            }) : elem.value = {
                raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
                cooked: this.value
            }, this.next(), elem.tail = this.type === types$1.backQuote, this.finishNode(elem, "TemplateElement");
        }, pp$5.parseTemplate = function(ref) {
            void 0 === ref && (ref = {});
            var isTagged = ref.isTagged;
            void 0 === isTagged && (isTagged = !1);
            var node = this.startNode();
            this.next(), node.expressions = [];
            var curElt = this.parseTemplateElement({
                isTagged
            });
            for(node.quasis = [
                curElt
            ]; !curElt.tail;)this.type === types$1.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(types$1.dollarBraceL), node.expressions.push(this.parseExpression()), this.expect(types$1.braceR), node.quasis.push(curElt = this.parseTemplateElement({
                isTagged
            }));
            return this.next(), this.finishNode(node, "TemplateLiteral");
        }, pp$5.isAsyncProp = function(prop) {
            return !prop.computed && "Identifier" === prop.key.type && "async" === prop.key.name && (this.type === types$1.name || this.type === types$1.num || this.type === types$1.string || this.type === types$1.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === types$1.star) && !lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
        }, pp$5.parseObj = function(isPattern, refDestructuringErrors) {
            var node = this.startNode(), first = !0, propHash = {};
            for(node.properties = [], this.next(); !this.eat(types$1.braceR);){
                if (first) first = !1;
                else if (this.expect(types$1.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(types$1.braceR)) break;
                var prop = this.parseProperty(isPattern, refDestructuringErrors);
                isPattern || this.checkPropClash(prop, propHash, refDestructuringErrors), node.properties.push(prop);
            }
            return this.finishNode(node, isPattern ? "ObjectPattern" : "ObjectExpression");
        }, pp$5.parseProperty = function(isPattern, refDestructuringErrors) {
            var isGenerator, isAsync, startPos, startLoc, prop = this.startNode();
            if (this.options.ecmaVersion >= 9 && this.eat(types$1.ellipsis)) return isPattern ? (prop.argument = this.parseIdent(!1), this.type === types$1.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.finishNode(prop, "RestElement")) : (prop.argument = this.parseMaybeAssign(!1, refDestructuringErrors), this.type === types$1.comma && refDestructuringErrors && refDestructuringErrors.trailingComma < 0 && (refDestructuringErrors.trailingComma = this.start), this.finishNode(prop, "SpreadElement"));
            this.options.ecmaVersion >= 6 && (prop.method = !1, prop.shorthand = !1, (isPattern || refDestructuringErrors) && (startPos = this.start, startLoc = this.startLoc), isPattern || (isGenerator = this.eat(types$1.star)));
            var containsEsc = this.containsEsc;
            return this.parsePropertyName(prop), !isPattern && !containsEsc && this.options.ecmaVersion >= 8 && !isGenerator && this.isAsyncProp(prop) ? (isAsync = !0, isGenerator = this.options.ecmaVersion >= 9 && this.eat(types$1.star), this.parsePropertyName(prop)) : isAsync = !1, this.parsePropertyValue(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc), this.finishNode(prop, "Property");
        }, pp$5.parseGetterSetter = function(prop) {
            prop.kind = prop.key.name, this.parsePropertyName(prop), prop.value = this.parseMethod(!1);
            var paramCount = "get" === prop.kind ? 0 : 1;
            if (prop.value.params.length !== paramCount) {
                var start = prop.value.start;
                "get" === prop.kind ? this.raiseRecoverable(start, "getter should have no params") : this.raiseRecoverable(start, "setter should have exactly one param");
            } else "set" === prop.kind && "RestElement" === prop.value.params[0].type && this.raiseRecoverable(prop.value.params[0].start, "Setter cannot use rest params");
        }, pp$5.parsePropertyValue = function(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc) {
            (isGenerator || isAsync) && this.type === types$1.colon && this.unexpected(), this.eat(types$1.colon) ? (prop.value = isPattern ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, refDestructuringErrors), prop.kind = "init") : this.options.ecmaVersion >= 6 && this.type === types$1.parenL ? (isPattern && this.unexpected(), prop.kind = "init", prop.method = !0, prop.value = this.parseMethod(isGenerator, isAsync)) : isPattern || containsEsc || !(this.options.ecmaVersion >= 5) || prop.computed || "Identifier" !== prop.key.type || "get" !== prop.key.name && "set" !== prop.key.name || this.type === types$1.comma || this.type === types$1.braceR || this.type === types$1.eq ? this.options.ecmaVersion >= 6 && !prop.computed && "Identifier" === prop.key.type ? ((isGenerator || isAsync) && this.unexpected(), this.checkUnreserved(prop.key), "await" !== prop.key.name || this.awaitIdentPos || (this.awaitIdentPos = startPos), prop.kind = "init", isPattern ? prop.value = this.parseMaybeDefault(startPos, startLoc, this.copyNode(prop.key)) : this.type === types$1.eq && refDestructuringErrors ? (refDestructuringErrors.shorthandAssign < 0 && (refDestructuringErrors.shorthandAssign = this.start), prop.value = this.parseMaybeDefault(startPos, startLoc, this.copyNode(prop.key))) : prop.value = this.copyNode(prop.key), prop.shorthand = !0) : this.unexpected() : ((isGenerator || isAsync) && this.unexpected(), this.parseGetterSetter(prop));
        }, pp$5.parsePropertyName = function(prop) {
            if (this.options.ecmaVersion >= 6) {
                if (this.eat(types$1.bracketL)) return prop.computed = !0, prop.key = this.parseMaybeAssign(), this.expect(types$1.bracketR), prop.key;
                prop.computed = !1;
            }
            return prop.key = this.type === types$1.num || this.type === types$1.string ? this.parseExprAtom() : this.parseIdent("never" !== this.options.allowReserved);
        }, pp$5.initFunction = function(node) {
            node.id = null, this.options.ecmaVersion >= 6 && (node.generator = node.expression = !1), this.options.ecmaVersion >= 8 && (node.async = !1);
        }, pp$5.parseMethod = function(isGenerator, isAsync, allowDirectSuper) {
            var node = this.startNode(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
            return this.initFunction(node), this.options.ecmaVersion >= 6 && (node.generator = isGenerator), this.options.ecmaVersion >= 8 && (node.async = !!isAsync), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(64 | functionFlags(isAsync, node.generator) | (allowDirectSuper ? 128 : 0)), this.expect(types$1.parenL), node.params = this.parseBindingList(types$1.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(node, !1, !0, !1), this.yieldPos = oldYieldPos, this.awaitPos = oldAwaitPos, this.awaitIdentPos = oldAwaitIdentPos, this.finishNode(node, "FunctionExpression");
        }, pp$5.parseArrowExpression = function(node, params, isAsync, forInit) {
            var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
            return this.enterScope(16 | functionFlags(isAsync, !1)), this.initFunction(node), this.options.ecmaVersion >= 8 && (node.async = !!isAsync), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, node.params = this.toAssignableList(params, !0), this.parseFunctionBody(node, !0, !1, forInit), this.yieldPos = oldYieldPos, this.awaitPos = oldAwaitPos, this.awaitIdentPos = oldAwaitIdentPos, this.finishNode(node, "ArrowFunctionExpression");
        }, pp$5.parseFunctionBody = function(node, isArrowFunction, isMethod, forInit) {
            var isExpression = isArrowFunction && this.type !== types$1.braceL, oldStrict = this.strict, useStrict = !1;
            if (isExpression) node.body = this.parseMaybeAssign(forInit), node.expression = !0, this.checkParams(node, !1);
            else {
                var nonSimple = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(node.params);
                oldStrict && !nonSimple || (useStrict = this.strictDirective(this.end)) && nonSimple && this.raiseRecoverable(node.start, "Illegal 'use strict' directive in function with non-simple parameter list");
                var oldLabels = this.labels;
                this.labels = [], useStrict && (this.strict = !0), this.checkParams(node, !oldStrict && !useStrict && !isArrowFunction && !isMethod && this.isSimpleParamList(node.params)), this.strict && node.id && this.checkLValSimple(node.id, 5), node.body = this.parseBlock(!1, void 0, useStrict && !oldStrict), node.expression = !1, this.adaptDirectivePrologue(node.body.body), this.labels = oldLabels;
            }
            this.exitScope();
        }, pp$5.isSimpleParamList = function(params) {
            for(var i = 0, list = params; i < list.length; i += 1){
                if ("Identifier" !== list[i].type) return !1;
            }
            return !0;
        }, pp$5.checkParams = function(node, allowDuplicates) {
            for(var nameHash = Object.create(null), i = 0, list = node.params; i < list.length; i += 1){
                var param = list[i];
                this.checkLValInnerPattern(param, 1, allowDuplicates ? null : nameHash);
            }
        }, pp$5.parseExprList = function(close, allowTrailingComma, allowEmpty, refDestructuringErrors) {
            for(var elts = [], first = !0; !this.eat(close);){
                if (first) first = !1;
                else if (this.expect(types$1.comma), allowTrailingComma && this.afterTrailingComma(close)) break;
                var elt = void 0;
                allowEmpty && this.type === types$1.comma ? elt = null : this.type === types$1.ellipsis ? (elt = this.parseSpread(refDestructuringErrors), refDestructuringErrors && this.type === types$1.comma && refDestructuringErrors.trailingComma < 0 && (refDestructuringErrors.trailingComma = this.start)) : elt = this.parseMaybeAssign(!1, refDestructuringErrors), elts.push(elt);
            }
            return elts;
        }, pp$5.checkUnreserved = function(ref) {
            var start = ref.start, end = ref.end, name = ref.name;
            (this.inGenerator && "yield" === name && this.raiseRecoverable(start, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && "await" === name && this.raiseRecoverable(start, "Cannot use 'await' as identifier inside an async function"), this.currentThisScope().inClassFieldInit && "arguments" === name && this.raiseRecoverable(start, "Cannot use 'arguments' in class field initializer"), !this.inClassStaticBlock || "arguments" !== name && "await" !== name || this.raise(start, "Cannot use " + name + " in class static initialization block"), this.keywords.test(name) && this.raise(start, "Unexpected keyword '" + name + "'"), this.options.ecmaVersion < 6 && -1 !== this.input.slice(start, end).indexOf("\\")) || (this.strict ? this.reservedWordsStrict : this.reservedWords).test(name) && (this.inAsync || "await" !== name || this.raiseRecoverable(start, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(start, "The keyword '" + name + "' is reserved"));
        }, pp$5.parseIdent = function(liberal) {
            var node = this.parseIdentNode();
            return this.next(!!liberal), this.finishNode(node, "Identifier"), liberal || (this.checkUnreserved(node), "await" !== node.name || this.awaitIdentPos || (this.awaitIdentPos = node.start)), node;
        }, pp$5.parseIdentNode = function() {
            var node = this.startNode();
            return this.type === types$1.name ? node.name = this.value : this.type.keyword ? (node.name = this.type.keyword, "class" !== node.name && "function" !== node.name || this.lastTokEnd === this.lastTokStart + 1 && 46 === this.input.charCodeAt(this.lastTokStart) || this.context.pop(), this.type = types$1.name) : this.unexpected(), node;
        }, pp$5.parsePrivateIdent = function() {
            var node = this.startNode();
            return this.type === types$1.privateId ? node.name = this.value : this.unexpected(), this.next(), this.finishNode(node, "PrivateIdentifier"), this.options.checkPrivateFields && (0 === this.privateNameStack.length ? this.raise(node.start, "Private field '#" + node.name + "' must be declared in an enclosing class") : this.privateNameStack[this.privateNameStack.length - 1].used.push(node)), node;
        }, pp$5.parseYield = function(forInit) {
            this.yieldPos || (this.yieldPos = this.start);
            var node = this.startNode();
            return this.next(), this.type === types$1.semi || this.canInsertSemicolon() || this.type !== types$1.star && !this.type.startsExpr ? (node.delegate = !1, node.argument = null) : (node.delegate = this.eat(types$1.star), node.argument = this.parseMaybeAssign(forInit)), this.finishNode(node, "YieldExpression");
        }, pp$5.parseAwait = function(forInit) {
            this.awaitPos || (this.awaitPos = this.start);
            var node = this.startNode();
            return this.next(), node.argument = this.parseMaybeUnary(null, !0, !1, forInit), this.finishNode(node, "AwaitExpression");
        };
        var pp$4 = Parser.prototype;
        pp$4.raise = function(pos, message) {
            var loc = getLineInfo(this.input, pos);
            message += " (" + loc.line + ":" + loc.column + ")";
            var err = new SyntaxError(message);
            throw err.pos = pos, err.loc = loc, err.raisedAt = this.pos, err;
        }, pp$4.raiseRecoverable = pp$4.raise, pp$4.curPosition = function() {
            if (this.options.locations) return new Position(this.curLine, this.pos - this.lineStart);
        };
        var pp$3 = Parser.prototype, Scope = function(flags) {
            this.flags = flags, this.var = [], this.lexical = [], this.functions = [], this.inClassFieldInit = !1;
        };
        pp$3.enterScope = function(flags) {
            this.scopeStack.push(new Scope(flags));
        }, pp$3.exitScope = function() {
            this.scopeStack.pop();
        }, pp$3.treatFunctionsAsVarInScope = function(scope) {
            return 2 & scope.flags || !this.inModule && 1 & scope.flags;
        }, pp$3.declareName = function(name, bindingType, pos) {
            var redeclared = !1;
            if (2 === bindingType) {
                var scope = this.currentScope();
                redeclared = scope.lexical.indexOf(name) > -1 || scope.functions.indexOf(name) > -1 || scope.var.indexOf(name) > -1, scope.lexical.push(name), this.inModule && 1 & scope.flags && delete this.undefinedExports[name];
            } else if (4 === bindingType) {
                this.currentScope().lexical.push(name);
            } else if (3 === bindingType) {
                var scope$2 = this.currentScope();
                redeclared = this.treatFunctionsAsVar ? scope$2.lexical.indexOf(name) > -1 : scope$2.lexical.indexOf(name) > -1 || scope$2.var.indexOf(name) > -1, scope$2.functions.push(name);
            } else for(var i = this.scopeStack.length - 1; i >= 0; --i){
                var scope$3 = this.scopeStack[i];
                if (scope$3.lexical.indexOf(name) > -1 && !(32 & scope$3.flags && scope$3.lexical[0] === name) || !this.treatFunctionsAsVarInScope(scope$3) && scope$3.functions.indexOf(name) > -1) {
                    redeclared = !0;
                    break;
                }
                if (scope$3.var.push(name), this.inModule && 1 & scope$3.flags && delete this.undefinedExports[name], 259 & scope$3.flags) break;
            }
            redeclared && this.raiseRecoverable(pos, "Identifier '" + name + "' has already been declared");
        }, pp$3.checkLocalExport = function(id) {
            -1 === this.scopeStack[0].lexical.indexOf(id.name) && -1 === this.scopeStack[0].var.indexOf(id.name) && (this.undefinedExports[id.name] = id);
        }, pp$3.currentScope = function() {
            return this.scopeStack[this.scopeStack.length - 1];
        }, pp$3.currentVarScope = function() {
            for(var i = this.scopeStack.length - 1;; i--){
                var scope = this.scopeStack[i];
                if (259 & scope.flags) return scope;
            }
        }, pp$3.currentThisScope = function() {
            for(var i = this.scopeStack.length - 1;; i--){
                var scope = this.scopeStack[i];
                if (259 & scope.flags && !(16 & scope.flags)) return scope;
            }
        };
        var Node = function(parser, pos, loc) {
            this.type = "", this.start = pos, this.end = 0, parser.options.locations && (this.loc = new SourceLocation(parser, loc)), parser.options.directSourceFile && (this.sourceFile = parser.options.directSourceFile), parser.options.ranges && (this.range = [
                pos,
                0
            ]);
        }, pp$2 = Parser.prototype;
        function finishNodeAt(node, type, pos, loc) {
            return node.type = type, node.end = pos, this.options.locations && (node.loc.end = loc), this.options.ranges && (node.range[1] = pos), node;
        }
        pp$2.startNode = function() {
            return new Node(this, this.start, this.startLoc);
        }, pp$2.startNodeAt = function(pos, loc) {
            return new Node(this, pos, loc);
        }, pp$2.finishNode = function(node, type) {
            return finishNodeAt.call(this, node, type, this.lastTokEnd, this.lastTokEndLoc);
        }, pp$2.finishNodeAt = function(node, type, pos, loc) {
            return finishNodeAt.call(this, node, type, pos, loc);
        }, pp$2.copyNode = function(node) {
            var newNode = new Node(this, node.start, this.startLoc);
            for(var prop in node)newNode[prop] = node[prop];
            return newNode;
        };
        var ecma9BinaryProperties = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS", ecma10BinaryProperties = ecma9BinaryProperties + " Extended_Pictographic", ecma12BinaryProperties = ecma10BinaryProperties + " EBase EComp EMod EPres ExtPict", unicodeBinaryProperties = {
            9: ecma9BinaryProperties,
            10: ecma10BinaryProperties,
            11: ecma10BinaryProperties,
            12: ecma12BinaryProperties,
            13: ecma12BinaryProperties,
            14: ecma12BinaryProperties
        }, unicodeBinaryPropertiesOfStrings = {
            9: "",
            10: "",
            11: "",
            12: "",
            13: "",
            14: "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji"
        }, unicodeGeneralCategoryValues = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu", ecma9ScriptValues = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb", ecma10ScriptValues = ecma9ScriptValues + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd", ecma11ScriptValues = ecma10ScriptValues + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho", ecma12ScriptValues = ecma11ScriptValues + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi", ecma13ScriptValues = ecma12ScriptValues + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith", unicodeScriptValues = {
            9: ecma9ScriptValues,
            10: ecma10ScriptValues,
            11: ecma11ScriptValues,
            12: ecma12ScriptValues,
            13: ecma13ScriptValues,
            14: ecma13ScriptValues + " Gara Garay Gukh Gurung_Khema Hrkt Katakana_Or_Hiragana Kawi Kirat_Rai Krai Nag_Mundari Nagm Ol_Onal Onao Sunu Sunuwar Todhri Todr Tulu_Tigalari Tutg Unknown Zzzz"
        }, data = {};
        function buildUnicodeData(ecmaVersion) {
            var d = data[ecmaVersion] = {
                binary: wordsRegexp(unicodeBinaryProperties[ecmaVersion] + " " + unicodeGeneralCategoryValues),
                binaryOfStrings: wordsRegexp(unicodeBinaryPropertiesOfStrings[ecmaVersion]),
                nonBinary: {
                    General_Category: wordsRegexp(unicodeGeneralCategoryValues),
                    Script: wordsRegexp(unicodeScriptValues[ecmaVersion])
                }
            };
            d.nonBinary.Script_Extensions = d.nonBinary.Script, d.nonBinary.gc = d.nonBinary.General_Category, d.nonBinary.sc = d.nonBinary.Script, d.nonBinary.scx = d.nonBinary.Script_Extensions;
        }
        for(var i = 0, list = [
            9,
            10,
            11,
            12,
            13,
            14
        ]; i < list.length; i += 1){
            buildUnicodeData(list[i]);
        }
        var pp$1 = Parser.prototype, BranchID = function(parent, base) {
            this.parent = parent, this.base = base || this;
        };
        BranchID.prototype.separatedFrom = function(alt) {
            for(var self = this; self; self = self.parent)for(var other = alt; other; other = other.parent)if (self.base === other.base && self !== other) return !0;
            return !1;
        }, BranchID.prototype.sibling = function() {
            return new BranchID(this.parent, this.base);
        };
        var RegExpValidationState = function(parser) {
            this.parser = parser, this.validFlags = "gim" + (parser.options.ecmaVersion >= 6 ? "uy" : "") + (parser.options.ecmaVersion >= 9 ? "s" : "") + (parser.options.ecmaVersion >= 13 ? "d" : "") + (parser.options.ecmaVersion >= 15 ? "v" : ""), this.unicodeProperties = data[parser.options.ecmaVersion >= 14 ? 14 : parser.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchV = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = Object.create(null), this.backReferenceNames = [], this.branchID = null;
        };
        function isRegularExpressionModifier(ch) {
            return 105 === ch || 109 === ch || 115 === ch;
        }
        function isSyntaxCharacter(ch) {
            return 36 === ch || ch >= 40 && ch <= 43 || 46 === ch || 63 === ch || ch >= 91 && ch <= 94 || ch >= 123 && ch <= 125;
        }
        function isControlLetter(ch) {
            return ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122;
        }
        RegExpValidationState.prototype.reset = function(start, pattern, flags) {
            var unicodeSets = -1 !== flags.indexOf("v"), unicode = -1 !== flags.indexOf("u");
            this.start = 0 | start, this.source = pattern + "", this.flags = flags, unicodeSets && this.parser.options.ecmaVersion >= 15 ? (this.switchU = !0, this.switchV = !0, this.switchN = !0) : (this.switchU = unicode && this.parser.options.ecmaVersion >= 6, this.switchV = !1, this.switchN = unicode && this.parser.options.ecmaVersion >= 9);
        }, RegExpValidationState.prototype.raise = function(message) {
            this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + message);
        }, RegExpValidationState.prototype.at = function(i, forceU) {
            void 0 === forceU && (forceU = !1);
            var s = this.source, l = s.length;
            if (i >= l) return -1;
            var c = s.charCodeAt(i);
            if (!forceU && !this.switchU || c <= 55295 || c >= 57344 || i + 1 >= l) return c;
            var next = s.charCodeAt(i + 1);
            return next >= 56320 && next <= 57343 ? (c << 10) + next - 56613888 : c;
        }, RegExpValidationState.prototype.nextIndex = function(i, forceU) {
            void 0 === forceU && (forceU = !1);
            var s = this.source, l = s.length;
            if (i >= l) return l;
            var next, c = s.charCodeAt(i);
            return !forceU && !this.switchU || c <= 55295 || c >= 57344 || i + 1 >= l || (next = s.charCodeAt(i + 1)) < 56320 || next > 57343 ? i + 1 : i + 2;
        }, RegExpValidationState.prototype.current = function(forceU) {
            return void 0 === forceU && (forceU = !1), this.at(this.pos, forceU);
        }, RegExpValidationState.prototype.lookahead = function(forceU) {
            return void 0 === forceU && (forceU = !1), this.at(this.nextIndex(this.pos, forceU), forceU);
        }, RegExpValidationState.prototype.advance = function(forceU) {
            void 0 === forceU && (forceU = !1), this.pos = this.nextIndex(this.pos, forceU);
        }, RegExpValidationState.prototype.eat = function(ch, forceU) {
            return void 0 === forceU && (forceU = !1), this.current(forceU) === ch && (this.advance(forceU), !0);
        }, RegExpValidationState.prototype.eatChars = function(chs, forceU) {
            void 0 === forceU && (forceU = !1);
            for(var pos = this.pos, i = 0, list = chs; i < list.length; i += 1){
                var ch = list[i], current = this.at(pos, forceU);
                if (-1 === current || current !== ch) return !1;
                pos = this.nextIndex(pos, forceU);
            }
            return this.pos = pos, !0;
        }, pp$1.validateRegExpFlags = function(state) {
            for(var validFlags = state.validFlags, flags = state.flags, u = !1, v = !1, i = 0; i < flags.length; i++){
                var flag = flags.charAt(i);
                -1 === validFlags.indexOf(flag) && this.raise(state.start, "Invalid regular expression flag"), flags.indexOf(flag, i + 1) > -1 && this.raise(state.start, "Duplicate regular expression flag"), "u" === flag && (u = !0), "v" === flag && (v = !0);
            }
            this.options.ecmaVersion >= 15 && u && v && this.raise(state.start, "Invalid regular expression flag");
        }, pp$1.validateRegExpPattern = function(state) {
            this.regexp_pattern(state), !state.switchN && this.options.ecmaVersion >= 9 && function(obj) {
                for(var _ in obj)return !0;
                return !1;
            }(state.groupNames) && (state.switchN = !0, this.regexp_pattern(state));
        }, pp$1.regexp_pattern = function(state) {
            state.pos = 0, state.lastIntValue = 0, state.lastStringValue = "", state.lastAssertionIsQuantifiable = !1, state.numCapturingParens = 0, state.maxBackReference = 0, state.groupNames = Object.create(null), state.backReferenceNames.length = 0, state.branchID = null, this.regexp_disjunction(state), state.pos !== state.source.length && (state.eat(41) && state.raise("Unmatched ')'"), (state.eat(93) || state.eat(125)) && state.raise("Lone quantifier brackets")), state.maxBackReference > state.numCapturingParens && state.raise("Invalid escape");
            for(var i = 0, list = state.backReferenceNames; i < list.length; i += 1){
                var name = list[i];
                state.groupNames[name] || state.raise("Invalid named capture referenced");
            }
        }, pp$1.regexp_disjunction = function(state) {
            var trackDisjunction = this.options.ecmaVersion >= 16;
            for(trackDisjunction && (state.branchID = new BranchID(state.branchID, null)), this.regexp_alternative(state); state.eat(124);)trackDisjunction && (state.branchID = state.branchID.sibling()), this.regexp_alternative(state);
            trackDisjunction && (state.branchID = state.branchID.parent), this.regexp_eatQuantifier(state, !0) && state.raise("Nothing to repeat"), state.eat(123) && state.raise("Lone quantifier brackets");
        }, pp$1.regexp_alternative = function(state) {
            for(; state.pos < state.source.length && this.regexp_eatTerm(state););
        }, pp$1.regexp_eatTerm = function(state) {
            return this.regexp_eatAssertion(state) ? (state.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(state) && state.switchU && state.raise("Invalid quantifier"), !0) : !!(state.switchU ? this.regexp_eatAtom(state) : this.regexp_eatExtendedAtom(state)) && (this.regexp_eatQuantifier(state), !0);
        }, pp$1.regexp_eatAssertion = function(state) {
            var start = state.pos;
            if (state.lastAssertionIsQuantifiable = !1, state.eat(94) || state.eat(36)) return !0;
            if (state.eat(92)) {
                if (state.eat(66) || state.eat(98)) return !0;
                state.pos = start;
            }
            if (state.eat(40) && state.eat(63)) {
                var lookbehind = !1;
                if (this.options.ecmaVersion >= 9 && (lookbehind = state.eat(60)), state.eat(61) || state.eat(33)) return this.regexp_disjunction(state), state.eat(41) || state.raise("Unterminated group"), state.lastAssertionIsQuantifiable = !lookbehind, !0;
            }
            return state.pos = start, !1;
        }, pp$1.regexp_eatQuantifier = function(state, noError) {
            return void 0 === noError && (noError = !1), !!this.regexp_eatQuantifierPrefix(state, noError) && (state.eat(63), !0);
        }, pp$1.regexp_eatQuantifierPrefix = function(state, noError) {
            return state.eat(42) || state.eat(43) || state.eat(63) || this.regexp_eatBracedQuantifier(state, noError);
        }, pp$1.regexp_eatBracedQuantifier = function(state, noError) {
            var start = state.pos;
            if (state.eat(123)) {
                var min = 0, max = -1;
                if (this.regexp_eatDecimalDigits(state) && (min = state.lastIntValue, state.eat(44) && this.regexp_eatDecimalDigits(state) && (max = state.lastIntValue), state.eat(125))) return -1 !== max && max < min && !noError && state.raise("numbers out of order in {} quantifier"), !0;
                state.switchU && !noError && state.raise("Incomplete quantifier"), state.pos = start;
            }
            return !1;
        }, pp$1.regexp_eatAtom = function(state) {
            return this.regexp_eatPatternCharacters(state) || state.eat(46) || this.regexp_eatReverseSolidusAtomEscape(state) || this.regexp_eatCharacterClass(state) || this.regexp_eatUncapturingGroup(state) || this.regexp_eatCapturingGroup(state);
        }, pp$1.regexp_eatReverseSolidusAtomEscape = function(state) {
            var start = state.pos;
            if (state.eat(92)) {
                if (this.regexp_eatAtomEscape(state)) return !0;
                state.pos = start;
            }
            return !1;
        }, pp$1.regexp_eatUncapturingGroup = function(state) {
            var start = state.pos;
            if (state.eat(40)) {
                if (state.eat(63)) {
                    if (this.options.ecmaVersion >= 16) {
                        var addModifiers = this.regexp_eatModifiers(state), hasHyphen = state.eat(45);
                        if (addModifiers || hasHyphen) {
                            for(var i = 0; i < addModifiers.length; i++){
                                var modifier = addModifiers.charAt(i);
                                addModifiers.indexOf(modifier, i + 1) > -1 && state.raise("Duplicate regular expression modifiers");
                            }
                            if (hasHyphen) {
                                var removeModifiers = this.regexp_eatModifiers(state);
                                addModifiers || removeModifiers || 58 !== state.current() || state.raise("Invalid regular expression modifiers");
                                for(var i$1 = 0; i$1 < removeModifiers.length; i$1++){
                                    var modifier$1 = removeModifiers.charAt(i$1);
                                    (removeModifiers.indexOf(modifier$1, i$1 + 1) > -1 || addModifiers.indexOf(modifier$1) > -1) && state.raise("Duplicate regular expression modifiers");
                                }
                            }
                        }
                    }
                    if (state.eat(58)) {
                        if (this.regexp_disjunction(state), state.eat(41)) return !0;
                        state.raise("Unterminated group");
                    }
                }
                state.pos = start;
            }
            return !1;
        }, pp$1.regexp_eatCapturingGroup = function(state) {
            if (state.eat(40)) {
                if (this.options.ecmaVersion >= 9 ? this.regexp_groupSpecifier(state) : 63 === state.current() && state.raise("Invalid group"), this.regexp_disjunction(state), state.eat(41)) return state.numCapturingParens += 1, !0;
                state.raise("Unterminated group");
            }
            return !1;
        }, pp$1.regexp_eatModifiers = function(state) {
            for(var modifiers = "", ch = 0; -1 !== (ch = state.current()) && isRegularExpressionModifier(ch);)modifiers += codePointToString(ch), state.advance();
            return modifiers;
        }, pp$1.regexp_eatExtendedAtom = function(state) {
            return state.eat(46) || this.regexp_eatReverseSolidusAtomEscape(state) || this.regexp_eatCharacterClass(state) || this.regexp_eatUncapturingGroup(state) || this.regexp_eatCapturingGroup(state) || this.regexp_eatInvalidBracedQuantifier(state) || this.regexp_eatExtendedPatternCharacter(state);
        }, pp$1.regexp_eatInvalidBracedQuantifier = function(state) {
            return this.regexp_eatBracedQuantifier(state, !0) && state.raise("Nothing to repeat"), !1;
        }, pp$1.regexp_eatSyntaxCharacter = function(state) {
            var ch = state.current();
            return !!isSyntaxCharacter(ch) && (state.lastIntValue = ch, state.advance(), !0);
        }, pp$1.regexp_eatPatternCharacters = function(state) {
            for(var start = state.pos, ch = 0; -1 !== (ch = state.current()) && !isSyntaxCharacter(ch);)state.advance();
            return state.pos !== start;
        }, pp$1.regexp_eatExtendedPatternCharacter = function(state) {
            var ch = state.current();
            return !(-1 === ch || 36 === ch || ch >= 40 && ch <= 43 || 46 === ch || 63 === ch || 91 === ch || 94 === ch || 124 === ch) && (state.advance(), !0);
        }, pp$1.regexp_groupSpecifier = function(state) {
            if (state.eat(63)) {
                this.regexp_eatGroupName(state) || state.raise("Invalid group");
                var trackDisjunction = this.options.ecmaVersion >= 16, known = state.groupNames[state.lastStringValue];
                if (known) if (trackDisjunction) for(var i = 0, list = known; i < list.length; i += 1){
                    list[i].separatedFrom(state.branchID) || state.raise("Duplicate capture group name");
                }
                else state.raise("Duplicate capture group name");
                trackDisjunction ? (known || (state.groupNames[state.lastStringValue] = [])).push(state.branchID) : state.groupNames[state.lastStringValue] = !0;
            }
        }, pp$1.regexp_eatGroupName = function(state) {
            if (state.lastStringValue = "", state.eat(60)) {
                if (this.regexp_eatRegExpIdentifierName(state) && state.eat(62)) return !0;
                state.raise("Invalid capture group name");
            }
            return !1;
        }, pp$1.regexp_eatRegExpIdentifierName = function(state) {
            if (state.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(state)) {
                for(state.lastStringValue += codePointToString(state.lastIntValue); this.regexp_eatRegExpIdentifierPart(state);)state.lastStringValue += codePointToString(state.lastIntValue);
                return !0;
            }
            return !1;
        }, pp$1.regexp_eatRegExpIdentifierStart = function(state) {
            var start = state.pos, forceU = this.options.ecmaVersion >= 11, ch = state.current(forceU);
            return state.advance(forceU), 92 === ch && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU) && (ch = state.lastIntValue), function(ch) {
                return isIdentifierStart(ch, !0) || 36 === ch || 95 === ch;
            }(ch) ? (state.lastIntValue = ch, !0) : (state.pos = start, !1);
        }, pp$1.regexp_eatRegExpIdentifierPart = function(state) {
            var start = state.pos, forceU = this.options.ecmaVersion >= 11, ch = state.current(forceU);
            return state.advance(forceU), 92 === ch && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU) && (ch = state.lastIntValue), function(ch) {
                return isIdentifierChar(ch, !0) || 36 === ch || 95 === ch || 8204 === ch || 8205 === ch;
            }(ch) ? (state.lastIntValue = ch, !0) : (state.pos = start, !1);
        }, pp$1.regexp_eatAtomEscape = function(state) {
            return !!(this.regexp_eatBackReference(state) || this.regexp_eatCharacterClassEscape(state) || this.regexp_eatCharacterEscape(state) || state.switchN && this.regexp_eatKGroupName(state)) || (state.switchU && (99 === state.current() && state.raise("Invalid unicode escape"), state.raise("Invalid escape")), !1);
        }, pp$1.regexp_eatBackReference = function(state) {
            var start = state.pos;
            if (this.regexp_eatDecimalEscape(state)) {
                var n = state.lastIntValue;
                if (state.switchU) return n > state.maxBackReference && (state.maxBackReference = n), !0;
                if (n <= state.numCapturingParens) return !0;
                state.pos = start;
            }
            return !1;
        }, pp$1.regexp_eatKGroupName = function(state) {
            if (state.eat(107)) {
                if (this.regexp_eatGroupName(state)) return state.backReferenceNames.push(state.lastStringValue), !0;
                state.raise("Invalid named reference");
            }
            return !1;
        }, pp$1.regexp_eatCharacterEscape = function(state) {
            return this.regexp_eatControlEscape(state) || this.regexp_eatCControlLetter(state) || this.regexp_eatZero(state) || this.regexp_eatHexEscapeSequence(state) || this.regexp_eatRegExpUnicodeEscapeSequence(state, !1) || !state.switchU && this.regexp_eatLegacyOctalEscapeSequence(state) || this.regexp_eatIdentityEscape(state);
        }, pp$1.regexp_eatCControlLetter = function(state) {
            var start = state.pos;
            if (state.eat(99)) {
                if (this.regexp_eatControlLetter(state)) return !0;
                state.pos = start;
            }
            return !1;
        }, pp$1.regexp_eatZero = function(state) {
            return 48 === state.current() && !isDecimalDigit(state.lookahead()) && (state.lastIntValue = 0, state.advance(), !0);
        }, pp$1.regexp_eatControlEscape = function(state) {
            var ch = state.current();
            return 116 === ch ? (state.lastIntValue = 9, state.advance(), !0) : 110 === ch ? (state.lastIntValue = 10, state.advance(), !0) : 118 === ch ? (state.lastIntValue = 11, state.advance(), !0) : 102 === ch ? (state.lastIntValue = 12, state.advance(), !0) : 114 === ch && (state.lastIntValue = 13, state.advance(), !0);
        }, pp$1.regexp_eatControlLetter = function(state) {
            var ch = state.current();
            return !!isControlLetter(ch) && (state.lastIntValue = ch % 32, state.advance(), !0);
        }, pp$1.regexp_eatRegExpUnicodeEscapeSequence = function(state, forceU) {
            void 0 === forceU && (forceU = !1);
            var ch, start = state.pos, switchU = forceU || state.switchU;
            if (state.eat(117)) {
                if (this.regexp_eatFixedHexDigits(state, 4)) {
                    var lead = state.lastIntValue;
                    if (switchU && lead >= 55296 && lead <= 56319) {
                        var leadSurrogateEnd = state.pos;
                        if (state.eat(92) && state.eat(117) && this.regexp_eatFixedHexDigits(state, 4)) {
                            var trail = state.lastIntValue;
                            if (trail >= 56320 && trail <= 57343) return state.lastIntValue = 1024 * (lead - 55296) + (trail - 56320) + 65536, !0;
                        }
                        state.pos = leadSurrogateEnd, state.lastIntValue = lead;
                    }
                    return !0;
                }
                if (switchU && state.eat(123) && this.regexp_eatHexDigits(state) && state.eat(125) && (ch = state.lastIntValue) >= 0 && ch <= 1114111) return !0;
                switchU && state.raise("Invalid unicode escape"), state.pos = start;
            }
            return !1;
        }, pp$1.regexp_eatIdentityEscape = function(state) {
            if (state.switchU) return !!this.regexp_eatSyntaxCharacter(state) || !!state.eat(47) && (state.lastIntValue = 47, !0);
            var ch = state.current();
            return !(99 === ch || state.switchN && 107 === ch) && (state.lastIntValue = ch, state.advance(), !0);
        }, pp$1.regexp_eatDecimalEscape = function(state) {
            state.lastIntValue = 0;
            var ch = state.current();
            if (ch >= 49 && ch <= 57) {
                do {
                    state.lastIntValue = 10 * state.lastIntValue + (ch - 48), state.advance();
                }while ((ch = state.current()) >= 48 && ch <= 57)
                return !0;
            }
            return !1;
        };
        function isUnicodePropertyNameCharacter(ch) {
            return isControlLetter(ch) || 95 === ch;
        }
        function isUnicodePropertyValueCharacter(ch) {
            return isUnicodePropertyNameCharacter(ch) || isDecimalDigit(ch);
        }
        function isDecimalDigit(ch) {
            return ch >= 48 && ch <= 57;
        }
        function isHexDigit(ch) {
            return ch >= 48 && ch <= 57 || ch >= 65 && ch <= 70 || ch >= 97 && ch <= 102;
        }
        function hexToInt(ch) {
            return ch >= 65 && ch <= 70 ? ch - 65 + 10 : ch >= 97 && ch <= 102 ? ch - 97 + 10 : ch - 48;
        }
        function isOctalDigit(ch) {
            return ch >= 48 && ch <= 55;
        }
        pp$1.regexp_eatCharacterClassEscape = function(state) {
            var ch = state.current();
            if (function(ch) {
                return 100 === ch || 68 === ch || 115 === ch || 83 === ch || 119 === ch || 87 === ch;
            }(ch)) return state.lastIntValue = -1, state.advance(), 1;
            var negate = !1;
            if (state.switchU && this.options.ecmaVersion >= 9 && ((negate = 80 === ch) || 112 === ch)) {
                var result;
                if (state.lastIntValue = -1, state.advance(), state.eat(123) && (result = this.regexp_eatUnicodePropertyValueExpression(state)) && state.eat(125)) return negate && 2 === result && state.raise("Invalid property name"), result;
                state.raise("Invalid property name");
            }
            return 0;
        }, pp$1.regexp_eatUnicodePropertyValueExpression = function(state) {
            var start = state.pos;
            if (this.regexp_eatUnicodePropertyName(state) && state.eat(61)) {
                var name = state.lastStringValue;
                if (this.regexp_eatUnicodePropertyValue(state)) {
                    var value = state.lastStringValue;
                    return this.regexp_validateUnicodePropertyNameAndValue(state, name, value), 1;
                }
            }
            if (state.pos = start, this.regexp_eatLoneUnicodePropertyNameOrValue(state)) {
                var nameOrValue = state.lastStringValue;
                return this.regexp_validateUnicodePropertyNameOrValue(state, nameOrValue);
            }
            return 0;
        }, pp$1.regexp_validateUnicodePropertyNameAndValue = function(state, name, value) {
            hasOwn(state.unicodeProperties.nonBinary, name) || state.raise("Invalid property name"), state.unicodeProperties.nonBinary[name].test(value) || state.raise("Invalid property value");
        }, pp$1.regexp_validateUnicodePropertyNameOrValue = function(state, nameOrValue) {
            return state.unicodeProperties.binary.test(nameOrValue) ? 1 : state.switchV && state.unicodeProperties.binaryOfStrings.test(nameOrValue) ? 2 : void state.raise("Invalid property name");
        }, pp$1.regexp_eatUnicodePropertyName = function(state) {
            var ch = 0;
            for(state.lastStringValue = ""; isUnicodePropertyNameCharacter(ch = state.current());)state.lastStringValue += codePointToString(ch), state.advance();
            return "" !== state.lastStringValue;
        }, pp$1.regexp_eatUnicodePropertyValue = function(state) {
            var ch = 0;
            for(state.lastStringValue = ""; isUnicodePropertyValueCharacter(ch = state.current());)state.lastStringValue += codePointToString(ch), state.advance();
            return "" !== state.lastStringValue;
        }, pp$1.regexp_eatLoneUnicodePropertyNameOrValue = function(state) {
            return this.regexp_eatUnicodePropertyValue(state);
        }, pp$1.regexp_eatCharacterClass = function(state) {
            if (state.eat(91)) {
                var negate = state.eat(94), result = this.regexp_classContents(state);
                return state.eat(93) || state.raise("Unterminated character class"), negate && 2 === result && state.raise("Negated character class may contain strings"), !0;
            }
            return !1;
        }, pp$1.regexp_classContents = function(state) {
            return 93 === state.current() ? 1 : state.switchV ? this.regexp_classSetExpression(state) : (this.regexp_nonEmptyClassRanges(state), 1);
        }, pp$1.regexp_nonEmptyClassRanges = function(state) {
            for(; this.regexp_eatClassAtom(state);){
                var left = state.lastIntValue;
                if (state.eat(45) && this.regexp_eatClassAtom(state)) {
                    var right = state.lastIntValue;
                    !state.switchU || -1 !== left && -1 !== right || state.raise("Invalid character class"), -1 !== left && -1 !== right && left > right && state.raise("Range out of order in character class");
                }
            }
        }, pp$1.regexp_eatClassAtom = function(state) {
            var start = state.pos;
            if (state.eat(92)) {
                if (this.regexp_eatClassEscape(state)) return !0;
                if (state.switchU) {
                    var ch$1 = state.current();
                    (99 === ch$1 || isOctalDigit(ch$1)) && state.raise("Invalid class escape"), state.raise("Invalid escape");
                }
                state.pos = start;
            }
            var ch = state.current();
            return 93 !== ch && (state.lastIntValue = ch, state.advance(), !0);
        }, pp$1.regexp_eatClassEscape = function(state) {
            var start = state.pos;
            if (state.eat(98)) return state.lastIntValue = 8, !0;
            if (state.switchU && state.eat(45)) return state.lastIntValue = 45, !0;
            if (!state.switchU && state.eat(99)) {
                if (this.regexp_eatClassControlLetter(state)) return !0;
                state.pos = start;
            }
            return this.regexp_eatCharacterClassEscape(state) || this.regexp_eatCharacterEscape(state);
        }, pp$1.regexp_classSetExpression = function(state) {
            var subResult, result = 1;
            if (this.regexp_eatClassSetRange(state)) ;
            else if (subResult = this.regexp_eatClassSetOperand(state)) {
                2 === subResult && (result = 2);
                for(var start = state.pos; state.eatChars([
                    38,
                    38
                ]);)38 !== state.current() && (subResult = this.regexp_eatClassSetOperand(state)) ? 2 !== subResult && (result = 1) : state.raise("Invalid character in character class");
                if (start !== state.pos) return result;
                for(; state.eatChars([
                    45,
                    45
                ]);)this.regexp_eatClassSetOperand(state) || state.raise("Invalid character in character class");
                if (start !== state.pos) return result;
            } else state.raise("Invalid character in character class");
            for(;;)if (!this.regexp_eatClassSetRange(state)) {
                if (!(subResult = this.regexp_eatClassSetOperand(state))) return result;
                2 === subResult && (result = 2);
            }
        }, pp$1.regexp_eatClassSetRange = function(state) {
            var start = state.pos;
            if (this.regexp_eatClassSetCharacter(state)) {
                var left = state.lastIntValue;
                if (state.eat(45) && this.regexp_eatClassSetCharacter(state)) {
                    var right = state.lastIntValue;
                    return -1 !== left && -1 !== right && left > right && state.raise("Range out of order in character class"), !0;
                }
                state.pos = start;
            }
            return !1;
        }, pp$1.regexp_eatClassSetOperand = function(state) {
            return this.regexp_eatClassSetCharacter(state) ? 1 : this.regexp_eatClassStringDisjunction(state) || this.regexp_eatNestedClass(state);
        }, pp$1.regexp_eatNestedClass = function(state) {
            var start = state.pos;
            if (state.eat(91)) {
                var negate = state.eat(94), result = this.regexp_classContents(state);
                if (state.eat(93)) return negate && 2 === result && state.raise("Negated character class may contain strings"), result;
                state.pos = start;
            }
            if (state.eat(92)) {
                var result$1 = this.regexp_eatCharacterClassEscape(state);
                if (result$1) return result$1;
                state.pos = start;
            }
            return null;
        }, pp$1.regexp_eatClassStringDisjunction = function(state) {
            var start = state.pos;
            if (state.eatChars([
                92,
                113
            ])) {
                if (state.eat(123)) {
                    var result = this.regexp_classStringDisjunctionContents(state);
                    if (state.eat(125)) return result;
                } else state.raise("Invalid escape");
                state.pos = start;
            }
            return null;
        }, pp$1.regexp_classStringDisjunctionContents = function(state) {
            for(var result = this.regexp_classString(state); state.eat(124);)2 === this.regexp_classString(state) && (result = 2);
            return result;
        }, pp$1.regexp_classString = function(state) {
            for(var count = 0; this.regexp_eatClassSetCharacter(state);)count++;
            return 1 === count ? 1 : 2;
        }, pp$1.regexp_eatClassSetCharacter = function(state) {
            var start = state.pos;
            if (state.eat(92)) return !(!this.regexp_eatCharacterEscape(state) && !this.regexp_eatClassSetReservedPunctuator(state)) || (state.eat(98) ? (state.lastIntValue = 8, !0) : (state.pos = start, !1));
            var ch = state.current();
            return !(ch < 0 || ch === state.lookahead() && function(ch) {
                return 33 === ch || ch >= 35 && ch <= 38 || ch >= 42 && ch <= 44 || 46 === ch || ch >= 58 && ch <= 64 || 94 === ch || 96 === ch || 126 === ch;
            }(ch)) && !function(ch) {
                return 40 === ch || 41 === ch || 45 === ch || 47 === ch || ch >= 91 && ch <= 93 || ch >= 123 && ch <= 125;
            }(ch) && (state.advance(), state.lastIntValue = ch, !0);
        }, pp$1.regexp_eatClassSetReservedPunctuator = function(state) {
            var ch = state.current();
            return !!function(ch) {
                return 33 === ch || 35 === ch || 37 === ch || 38 === ch || 44 === ch || 45 === ch || ch >= 58 && ch <= 62 || 64 === ch || 96 === ch || 126 === ch;
            }(ch) && (state.lastIntValue = ch, state.advance(), !0);
        }, pp$1.regexp_eatClassControlLetter = function(state) {
            var ch = state.current();
            return !(!isDecimalDigit(ch) && 95 !== ch) && (state.lastIntValue = ch % 32, state.advance(), !0);
        }, pp$1.regexp_eatHexEscapeSequence = function(state) {
            var start = state.pos;
            if (state.eat(120)) {
                if (this.regexp_eatFixedHexDigits(state, 2)) return !0;
                state.switchU && state.raise("Invalid escape"), state.pos = start;
            }
            return !1;
        }, pp$1.regexp_eatDecimalDigits = function(state) {
            var start = state.pos, ch = 0;
            for(state.lastIntValue = 0; isDecimalDigit(ch = state.current());)state.lastIntValue = 10 * state.lastIntValue + (ch - 48), state.advance();
            return state.pos !== start;
        }, pp$1.regexp_eatHexDigits = function(state) {
            var start = state.pos, ch = 0;
            for(state.lastIntValue = 0; isHexDigit(ch = state.current());)state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch), state.advance();
            return state.pos !== start;
        }, pp$1.regexp_eatLegacyOctalEscapeSequence = function(state) {
            if (this.regexp_eatOctalDigit(state)) {
                var n1 = state.lastIntValue;
                if (this.regexp_eatOctalDigit(state)) {
                    var n2 = state.lastIntValue;
                    n1 <= 3 && this.regexp_eatOctalDigit(state) ? state.lastIntValue = 64 * n1 + 8 * n2 + state.lastIntValue : state.lastIntValue = 8 * n1 + n2;
                } else state.lastIntValue = n1;
                return !0;
            }
            return !1;
        }, pp$1.regexp_eatOctalDigit = function(state) {
            var ch = state.current();
            return isOctalDigit(ch) ? (state.lastIntValue = ch - 48, state.advance(), !0) : (state.lastIntValue = 0, !1);
        }, pp$1.regexp_eatFixedHexDigits = function(state, length) {
            var start = state.pos;
            state.lastIntValue = 0;
            for(var i = 0; i < length; ++i){
                var ch = state.current();
                if (!isHexDigit(ch)) return state.pos = start, !1;
                state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch), state.advance();
            }
            return !0;
        };
        var Token = function(p) {
            this.type = p.type, this.value = p.value, this.start = p.start, this.end = p.end, p.options.locations && (this.loc = new SourceLocation(p, p.startLoc, p.endLoc)), p.options.ranges && (this.range = [
                p.start,
                p.end
            ]);
        }, pp = Parser.prototype;
        function stringToBigInt(str) {
            return "function" != typeof BigInt ? null : BigInt(str.replace(/_/g, ""));
        }
        pp.next = function(ignoreEscapeSequenceInKeyword) {
            !ignoreEscapeSequenceInKeyword && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new Token(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken();
        }, pp.getToken = function() {
            return this.next(), new Token(this);
        }, "undefined" != typeof Symbol && (pp[Symbol.iterator] = function() {
            var this$1$1 = this;
            return {
                next: function() {
                    var token = this$1$1.getToken();
                    return {
                        done: token.type === types$1.eof,
                        value: token
                    };
                }
            };
        }), pp.nextToken = function() {
            var curContext = this.curContext();
            return curContext && curContext.preserveSpace || this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length ? this.finishToken(types$1.eof) : curContext.override ? curContext.override(this) : void this.readToken(this.fullCharCodeAtPos());
        }, pp.readToken = function(code) {
            return isIdentifierStart(code, this.options.ecmaVersion >= 6) || 92 === code ? this.readWord() : this.getTokenFromCode(code);
        }, pp.fullCharCodeAtPos = function() {
            var code = this.input.charCodeAt(this.pos);
            if (code <= 55295 || code >= 56320) return code;
            var next = this.input.charCodeAt(this.pos + 1);
            return next <= 56319 || next >= 57344 ? code : (code << 10) + next - 56613888;
        }, pp.skipBlockComment = function() {
            var startLoc = this.options.onComment && this.curPosition(), start = this.pos, end = this.input.indexOf("*/", this.pos += 2);
            if (-1 === end && this.raise(this.pos - 2, "Unterminated comment"), this.pos = end + 2, this.options.locations) for(var nextBreak = void 0, pos = start; (nextBreak = nextLineBreak(this.input, pos, this.pos)) > -1;)++this.curLine, pos = this.lineStart = nextBreak;
            this.options.onComment && this.options.onComment(!0, this.input.slice(start + 2, end), start, this.pos, startLoc, this.curPosition());
        }, pp.skipLineComment = function(startSkip) {
            for(var start = this.pos, startLoc = this.options.onComment && this.curPosition(), ch = this.input.charCodeAt(this.pos += startSkip); this.pos < this.input.length && !isNewLine(ch);)ch = this.input.charCodeAt(++this.pos);
            this.options.onComment && this.options.onComment(!1, this.input.slice(start + startSkip, this.pos), start, this.pos, startLoc, this.curPosition());
        }, pp.skipSpace = function() {
            loop: for(; this.pos < this.input.length;){
                var ch = this.input.charCodeAt(this.pos);
                switch(ch){
                    case 32:
                    case 160:
                        ++this.pos;
                        break;
                    case 13:
                        10 === this.input.charCodeAt(this.pos + 1) && ++this.pos;
                    case 10:
                    case 8232:
                    case 8233:
                        ++this.pos, this.options.locations && (++this.curLine, this.lineStart = this.pos);
                        break;
                    case 47:
                        switch(this.input.charCodeAt(this.pos + 1)){
                            case 42:
                                this.skipBlockComment();
                                break;
                            case 47:
                                this.skipLineComment(2);
                                break;
                            default:
                                break loop;
                        }
                        break;
                    default:
                        if (!(ch > 8 && ch < 14 || ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch)))) break loop;
                        ++this.pos;
                }
            }
        }, pp.finishToken = function(type, val) {
            this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
            var prevType = this.type;
            this.type = type, this.value = val, this.updateContext(prevType);
        }, pp.readToken_dot = function() {
            var next = this.input.charCodeAt(this.pos + 1);
            if (next >= 48 && next <= 57) return this.readNumber(!0);
            var next2 = this.input.charCodeAt(this.pos + 2);
            return this.options.ecmaVersion >= 6 && 46 === next && 46 === next2 ? (this.pos += 3, this.finishToken(types$1.ellipsis)) : (++this.pos, this.finishToken(types$1.dot));
        }, pp.readToken_slash = function() {
            var next = this.input.charCodeAt(this.pos + 1);
            return this.exprAllowed ? (++this.pos, this.readRegexp()) : 61 === next ? this.finishOp(types$1.assign, 2) : this.finishOp(types$1.slash, 1);
        }, pp.readToken_mult_modulo_exp = function(code) {
            var next = this.input.charCodeAt(this.pos + 1), size = 1, tokentype = 42 === code ? types$1.star : types$1.modulo;
            return this.options.ecmaVersion >= 7 && 42 === code && 42 === next && (++size, tokentype = types$1.starstar, next = this.input.charCodeAt(this.pos + 2)), 61 === next ? this.finishOp(types$1.assign, size + 1) : this.finishOp(tokentype, size);
        }, pp.readToken_pipe_amp = function(code) {
            var next = this.input.charCodeAt(this.pos + 1);
            if (next === code) {
                if (this.options.ecmaVersion >= 12) {
                    if (61 === this.input.charCodeAt(this.pos + 2)) return this.finishOp(types$1.assign, 3);
                }
                return this.finishOp(124 === code ? types$1.logicalOR : types$1.logicalAND, 2);
            }
            return 61 === next ? this.finishOp(types$1.assign, 2) : this.finishOp(124 === code ? types$1.bitwiseOR : types$1.bitwiseAND, 1);
        }, pp.readToken_caret = function() {
            return 61 === this.input.charCodeAt(this.pos + 1) ? this.finishOp(types$1.assign, 2) : this.finishOp(types$1.bitwiseXOR, 1);
        }, pp.readToken_plus_min = function(code) {
            var next = this.input.charCodeAt(this.pos + 1);
            return next === code ? 45 !== next || this.inModule || 62 !== this.input.charCodeAt(this.pos + 2) || 0 !== this.lastTokEnd && !lineBreak.test(this.input.slice(this.lastTokEnd, this.pos)) ? this.finishOp(types$1.incDec, 2) : (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : 61 === next ? this.finishOp(types$1.assign, 2) : this.finishOp(types$1.plusMin, 1);
        }, pp.readToken_lt_gt = function(code) {
            var next = this.input.charCodeAt(this.pos + 1), size = 1;
            return next === code ? (size = 62 === code && 62 === this.input.charCodeAt(this.pos + 2) ? 3 : 2, 61 === this.input.charCodeAt(this.pos + size) ? this.finishOp(types$1.assign, size + 1) : this.finishOp(types$1.bitShift, size)) : 33 !== next || 60 !== code || this.inModule || 45 !== this.input.charCodeAt(this.pos + 2) || 45 !== this.input.charCodeAt(this.pos + 3) ? (61 === next && (size = 2), this.finishOp(types$1.relational, size)) : (this.skipLineComment(4), this.skipSpace(), this.nextToken());
        }, pp.readToken_eq_excl = function(code) {
            var next = this.input.charCodeAt(this.pos + 1);
            return 61 === next ? this.finishOp(types$1.equality, 61 === this.input.charCodeAt(this.pos + 2) ? 3 : 2) : 61 === code && 62 === next && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(types$1.arrow)) : this.finishOp(61 === code ? types$1.eq : types$1.prefix, 1);
        }, pp.readToken_question = function() {
            var ecmaVersion = this.options.ecmaVersion;
            if (ecmaVersion >= 11) {
                var next = this.input.charCodeAt(this.pos + 1);
                if (46 === next) {
                    var next2 = this.input.charCodeAt(this.pos + 2);
                    if (next2 < 48 || next2 > 57) return this.finishOp(types$1.questionDot, 2);
                }
                if (63 === next) {
                    if (ecmaVersion >= 12) {
                        if (61 === this.input.charCodeAt(this.pos + 2)) return this.finishOp(types$1.assign, 3);
                    }
                    return this.finishOp(types$1.coalesce, 2);
                }
            }
            return this.finishOp(types$1.question, 1);
        }, pp.readToken_numberSign = function() {
            var code = 35;
            if (this.options.ecmaVersion >= 13 && (++this.pos, isIdentifierStart(code = this.fullCharCodeAtPos(), !0) || 92 === code)) return this.finishToken(types$1.privateId, this.readWord1());
            this.raise(this.pos, "Unexpected character '" + codePointToString(code) + "'");
        }, pp.getTokenFromCode = function(code) {
            switch(code){
                case 46:
                    return this.readToken_dot();
                case 40:
                    return ++this.pos, this.finishToken(types$1.parenL);
                case 41:
                    return ++this.pos, this.finishToken(types$1.parenR);
                case 59:
                    return ++this.pos, this.finishToken(types$1.semi);
                case 44:
                    return ++this.pos, this.finishToken(types$1.comma);
                case 91:
                    return ++this.pos, this.finishToken(types$1.bracketL);
                case 93:
                    return ++this.pos, this.finishToken(types$1.bracketR);
                case 123:
                    return ++this.pos, this.finishToken(types$1.braceL);
                case 125:
                    return ++this.pos, this.finishToken(types$1.braceR);
                case 58:
                    return ++this.pos, this.finishToken(types$1.colon);
                case 96:
                    if (this.options.ecmaVersion < 6) break;
                    return ++this.pos, this.finishToken(types$1.backQuote);
                case 48:
                    var next = this.input.charCodeAt(this.pos + 1);
                    if (120 === next || 88 === next) return this.readRadixNumber(16);
                    if (this.options.ecmaVersion >= 6) {
                        if (111 === next || 79 === next) return this.readRadixNumber(8);
                        if (98 === next || 66 === next) return this.readRadixNumber(2);
                    }
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                    return this.readNumber(!1);
                case 34:
                case 39:
                    return this.readString(code);
                case 47:
                    return this.readToken_slash();
                case 37:
                case 42:
                    return this.readToken_mult_modulo_exp(code);
                case 124:
                case 38:
                    return this.readToken_pipe_amp(code);
                case 94:
                    return this.readToken_caret();
                case 43:
                case 45:
                    return this.readToken_plus_min(code);
                case 60:
                case 62:
                    return this.readToken_lt_gt(code);
                case 61:
                case 33:
                    return this.readToken_eq_excl(code);
                case 63:
                    return this.readToken_question();
                case 126:
                    return this.finishOp(types$1.prefix, 1);
                case 35:
                    return this.readToken_numberSign();
            }
            this.raise(this.pos, "Unexpected character '" + codePointToString(code) + "'");
        }, pp.finishOp = function(type, size) {
            var str = this.input.slice(this.pos, this.pos + size);
            return this.pos += size, this.finishToken(type, str);
        }, pp.readRegexp = function() {
            for(var escaped, inClass, start = this.pos;;){
                this.pos >= this.input.length && this.raise(start, "Unterminated regular expression");
                var ch = this.input.charAt(this.pos);
                if (lineBreak.test(ch) && this.raise(start, "Unterminated regular expression"), escaped) escaped = !1;
                else {
                    if ("[" === ch) inClass = !0;
                    else if ("]" === ch && inClass) inClass = !1;
                    else if ("/" === ch && !inClass) break;
                    escaped = "\\" === ch;
                }
                ++this.pos;
            }
            var pattern = this.input.slice(start, this.pos);
            ++this.pos;
            var flagsStart = this.pos, flags = this.readWord1();
            this.containsEsc && this.unexpected(flagsStart);
            var state = this.regexpState || (this.regexpState = new RegExpValidationState(this));
            state.reset(start, pattern, flags), this.validateRegExpFlags(state), this.validateRegExpPattern(state);
            var value = null;
            try {
                value = new RegExp(pattern, flags);
            } catch (e) {}
            return this.finishToken(types$1.regexp, {
                pattern,
                flags,
                value
            });
        }, pp.readInt = function(radix, len, maybeLegacyOctalNumericLiteral) {
            for(var allowSeparators = this.options.ecmaVersion >= 12 && void 0 === len, isLegacyOctalNumericLiteral = maybeLegacyOctalNumericLiteral && 48 === this.input.charCodeAt(this.pos), start = this.pos, total = 0, lastCode = 0, i = 0, e = null == len ? 1 / 0 : len; i < e; ++i, ++this.pos){
                var code = this.input.charCodeAt(this.pos), val = void 0;
                if (allowSeparators && 95 === code) isLegacyOctalNumericLiteral && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), 95 === lastCode && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), 0 === i && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), lastCode = code;
                else {
                    if ((val = code >= 97 ? code - 97 + 10 : code >= 65 ? code - 65 + 10 : code >= 48 && code <= 57 ? code - 48 : 1 / 0) >= radix) break;
                    lastCode = code, total = total * radix + val;
                }
            }
            return allowSeparators && 95 === lastCode && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === start || null != len && this.pos - start !== len ? null : total;
        }, pp.readRadixNumber = function(radix) {
            var start = this.pos;
            this.pos += 2;
            var val = this.readInt(radix);
            return null == val && this.raise(this.start + 2, "Expected number in radix " + radix), this.options.ecmaVersion >= 11 && 110 === this.input.charCodeAt(this.pos) ? (val = stringToBigInt(this.input.slice(start, this.pos)), ++this.pos) : isIdentifierStart(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(types$1.num, val);
        }, pp.readNumber = function(startsWithDot) {
            var start = this.pos;
            startsWithDot || null !== this.readInt(10, void 0, !0) || this.raise(start, "Invalid number");
            var octal = this.pos - start >= 2 && 48 === this.input.charCodeAt(start);
            octal && this.strict && this.raise(start, "Invalid number");
            var next = this.input.charCodeAt(this.pos);
            if (!octal && !startsWithDot && this.options.ecmaVersion >= 11 && 110 === next) {
                var val$1 = stringToBigInt(this.input.slice(start, this.pos));
                return ++this.pos, isIdentifierStart(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(types$1.num, val$1);
            }
            octal && /[89]/.test(this.input.slice(start, this.pos)) && (octal = !1), 46 !== next || octal || (++this.pos, this.readInt(10), next = this.input.charCodeAt(this.pos)), 69 !== next && 101 !== next || octal || (43 !== (next = this.input.charCodeAt(++this.pos)) && 45 !== next || ++this.pos, null === this.readInt(10) && this.raise(start, "Invalid number")), isIdentifierStart(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
            var str, val = (str = this.input.slice(start, this.pos), octal ? parseInt(str, 8) : parseFloat(str.replace(/_/g, "")));
            return this.finishToken(types$1.num, val);
        }, pp.readCodePoint = function() {
            var code;
            if (123 === this.input.charCodeAt(this.pos)) {
                this.options.ecmaVersion < 6 && this.unexpected();
                var codePos = ++this.pos;
                code = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, code > 1114111 && this.invalidStringToken(codePos, "Code point out of bounds");
            } else code = this.readHexChar(4);
            return code;
        }, pp.readString = function(quote) {
            for(var out = "", chunkStart = ++this.pos;;){
                this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
                var ch = this.input.charCodeAt(this.pos);
                if (ch === quote) break;
                92 === ch ? (out += this.input.slice(chunkStart, this.pos), out += this.readEscapedChar(!1), chunkStart = this.pos) : 8232 === ch || 8233 === ch ? (this.options.ecmaVersion < 10 && this.raise(this.start, "Unterminated string constant"), ++this.pos, this.options.locations && (this.curLine++, this.lineStart = this.pos)) : (isNewLine(ch) && this.raise(this.start, "Unterminated string constant"), ++this.pos);
            }
            return out += this.input.slice(chunkStart, this.pos++), this.finishToken(types$1.string, out);
        };
        var INVALID_TEMPLATE_ESCAPE_ERROR = {};
        pp.tryReadTemplateToken = function() {
            this.inTemplateElement = !0;
            try {
                this.readTmplToken();
            } catch (err) {
                if (err !== INVALID_TEMPLATE_ESCAPE_ERROR) throw err;
                this.readInvalidTemplateToken();
            }
            this.inTemplateElement = !1;
        }, pp.invalidStringToken = function(position, message) {
            if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw INVALID_TEMPLATE_ESCAPE_ERROR;
            this.raise(position, message);
        }, pp.readTmplToken = function() {
            for(var out = "", chunkStart = this.pos;;){
                this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
                var ch = this.input.charCodeAt(this.pos);
                if (96 === ch || 36 === ch && 123 === this.input.charCodeAt(this.pos + 1)) return this.pos !== this.start || this.type !== types$1.template && this.type !== types$1.invalidTemplate ? (out += this.input.slice(chunkStart, this.pos), this.finishToken(types$1.template, out)) : 36 === ch ? (this.pos += 2, this.finishToken(types$1.dollarBraceL)) : (++this.pos, this.finishToken(types$1.backQuote));
                if (92 === ch) out += this.input.slice(chunkStart, this.pos), out += this.readEscapedChar(!0), chunkStart = this.pos;
                else if (isNewLine(ch)) {
                    switch(out += this.input.slice(chunkStart, this.pos), ++this.pos, ch){
                        case 13:
                            10 === this.input.charCodeAt(this.pos) && ++this.pos;
                        case 10:
                            out += "\n";
                            break;
                        default:
                            out += String.fromCharCode(ch);
                    }
                    this.options.locations && (++this.curLine, this.lineStart = this.pos), chunkStart = this.pos;
                } else ++this.pos;
            }
        }, pp.readInvalidTemplateToken = function() {
            for(; this.pos < this.input.length; this.pos++)switch(this.input[this.pos]){
                case "\\":
                    ++this.pos;
                    break;
                case "$":
                    if ("{" !== this.input[this.pos + 1]) break;
                case "`":
                    return this.finishToken(types$1.invalidTemplate, this.input.slice(this.start, this.pos));
                case "\r":
                    "\n" === this.input[this.pos + 1] && ++this.pos;
                case "\n":
                case "\u2028":
                case "\u2029":
                    ++this.curLine, this.lineStart = this.pos + 1;
            }
            this.raise(this.start, "Unterminated template");
        }, pp.readEscapedChar = function(inTemplate) {
            var ch = this.input.charCodeAt(++this.pos);
            switch(++this.pos, ch){
                case 110:
                    return "\n";
                case 114:
                    return "\r";
                case 120:
                    return String.fromCharCode(this.readHexChar(2));
                case 117:
                    return codePointToString(this.readCodePoint());
                case 116:
                    return "\t";
                case 98:
                    return "\b";
                case 118:
                    return "\v";
                case 102:
                    return "\f";
                case 13:
                    10 === this.input.charCodeAt(this.pos) && ++this.pos;
                case 10:
                    return this.options.locations && (this.lineStart = this.pos, ++this.curLine), "";
                case 56:
                case 57:
                    if (this.strict && this.invalidStringToken(this.pos - 1, "Invalid escape sequence"), inTemplate) {
                        var codePos = this.pos - 1;
                        this.invalidStringToken(codePos, "Invalid escape sequence in template string");
                    }
                default:
                    if (ch >= 48 && ch <= 55) {
                        var octalStr = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0], octal = parseInt(octalStr, 8);
                        return octal > 255 && (octalStr = octalStr.slice(0, -1), octal = parseInt(octalStr, 8)), this.pos += octalStr.length - 1, ch = this.input.charCodeAt(this.pos), "0" === octalStr && 56 !== ch && 57 !== ch || !this.strict && !inTemplate || this.invalidStringToken(this.pos - 1 - octalStr.length, inTemplate ? "Octal literal in template string" : "Octal literal in strict mode"), String.fromCharCode(octal);
                    }
                    return isNewLine(ch) ? (this.options.locations && (this.lineStart = this.pos, ++this.curLine), "") : String.fromCharCode(ch);
            }
        }, pp.readHexChar = function(len) {
            var codePos = this.pos, n = this.readInt(16, len);
            return null === n && this.invalidStringToken(codePos, "Bad character escape sequence"), n;
        }, pp.readWord1 = function() {
            this.containsEsc = !1;
            for(var word = "", first = !0, chunkStart = this.pos, astral = this.options.ecmaVersion >= 6; this.pos < this.input.length;){
                var ch = this.fullCharCodeAtPos();
                if (isIdentifierChar(ch, astral)) this.pos += ch <= 65535 ? 1 : 2;
                else {
                    if (92 !== ch) break;
                    this.containsEsc = !0, word += this.input.slice(chunkStart, this.pos);
                    var escStart = this.pos;
                    117 !== this.input.charCodeAt(++this.pos) && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
                    var esc = this.readCodePoint();
                    (first ? isIdentifierStart : isIdentifierChar)(esc, astral) || this.invalidStringToken(escStart, "Invalid Unicode escape"), word += codePointToString(esc), chunkStart = this.pos;
                }
                first = !1;
            }
            return word + this.input.slice(chunkStart, this.pos);
        }, pp.readWord = function() {
            var word = this.readWord1(), type = types$1.name;
            return this.keywords.test(word) && (type = keywords[word]), this.finishToken(type, word);
        };
        Parser.acorn = {
            Parser,
            version: "8.14.0",
            defaultOptions,
            Position,
            SourceLocation,
            getLineInfo,
            Node,
            TokenType,
            tokTypes: types$1,
            keywordTypes: keywords,
            TokContext,
            tokContexts: types,
            isIdentifierChar,
            isIdentifierStart,
            Token,
            isNewLine,
            lineBreak,
            lineBreakG,
            nonASCIIwhitespace
        };
        const external_node_module_namespaceObject = (()=>{
            const e = new Error("Cannot find module 'module'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })(), external_node_fs_namespaceObject = (()=>{
            const e = new Error("Cannot find module 'fs'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
        Math.floor, String.fromCharCode;
        const TRAILING_SLASH_RE = /\/$|\/\?|\/#/, JOIN_LEADING_SLASH_RE = /^\.?\//;
        function dist_hasTrailingSlash(input = "", respectQueryAndFragment) {
            return respectQueryAndFragment ? TRAILING_SLASH_RE.test(input) : input.endsWith("/");
        }
        function withTrailingSlash(input = "", respectQueryAndFragment) {
            if (!respectQueryAndFragment) return input.endsWith("/") ? input : input + "/";
            if (dist_hasTrailingSlash(input, !0)) return input || "/";
            let path = input, fragment = "";
            const fragmentIndex = input.indexOf("#");
            if (fragmentIndex >= 0 && (path = input.slice(0, fragmentIndex), fragment = input.slice(fragmentIndex), !path)) return fragment;
            const [s0, ...s] = path.split("?");
            return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
        }
        function isNonEmptyURL(url) {
            return url && "/" !== url;
        }
        function dist_joinURL(base, ...input) {
            let url = base || "";
            for (const segment of input.filter((url2)=>isNonEmptyURL(url2)))if (url) {
                const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
                url = withTrailingSlash(url) + _segment;
            } else url = segment;
            return url;
        }
        Symbol.for("ufo:protocolRelative");
        Object.defineProperty;
        const external_node_url_namespaceObject = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/native-url/index.js [app-client] (ecmascript)"), external_node_assert_namespaceObject = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/assert/assert.js [app-client] (ecmascript)"), external_node_process_namespaceObject = __turbopack_context__.r("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)"), external_node_path_namespaceObject = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/path-browserify/index.js [app-client] (ecmascript)"), external_node_v8_namespaceObject = (()=>{
            const e = new Error("Cannot find module 'v8'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })(), external_node_util_namespaceObject = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/util/util.js [app-client] (ecmascript)"), BUILTIN_MODULES = new Set(external_node_module_namespaceObject.builtinModules);
        function normalizeSlash(path) {
            return path.replace(/\\/g, "/");
        }
        const own$1 = {}.hasOwnProperty, classRegExp = /^([A-Z][a-z\d]*)+$/, kTypes = new Set([
            "string",
            "function",
            "number",
            "object",
            "Function",
            "Object",
            "boolean",
            "bigint",
            "symbol"
        ]), codes = {};
        function formatList(array, type = "and") {
            return array.length < 3 ? array.join(` ${type} `) : `${array.slice(0, -1).join(", ")}, ${type} ${array[array.length - 1]}`;
        }
        const messages = new Map;
        let userStackTraceLimit;
        function createError(sym, value, constructor) {
            return messages.set(sym, value), function(Base, key) {
                return NodeError;
                "TURBOPACK unreachable";
                function NodeError(...parameters) {
                    const limit = Error.stackTraceLimit;
                    isErrorStackTraceLimitWritable() && (Error.stackTraceLimit = 0);
                    const error = new Base;
                    isErrorStackTraceLimitWritable() && (Error.stackTraceLimit = limit);
                    const message = function(key, parameters, self) {
                        const message = messages.get(key);
                        if (external_node_assert_namespaceObject(void 0 !== message, "expected `message` to be found"), "function" == typeof message) return external_node_assert_namespaceObject(message.length <= parameters.length, `Code: ${key}; The provided arguments length (${parameters.length}) does not match the required ones (${message.length}).`), Reflect.apply(message, self, parameters);
                        const regex = /%[dfijoOs]/g;
                        let expectedLength = 0;
                        for(; null !== regex.exec(message);)expectedLength++;
                        return external_node_assert_namespaceObject(expectedLength === parameters.length, `Code: ${key}; The provided arguments length (${parameters.length}) does not match the required ones (${expectedLength}).`), 0 === parameters.length ? message : (parameters.unshift(message), Reflect.apply(external_node_util_namespaceObject.format, null, parameters));
                    }(key, parameters, error);
                    return Object.defineProperties(error, {
                        message: {
                            value: message,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        },
                        toString: {
                            value () {
                                return `${this.name} [${key}]: ${this.message}`;
                            },
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), captureLargerStackTrace(error), error.code = key, error;
                }
            }(constructor, sym);
        }
        function isErrorStackTraceLimitWritable() {
            try {
                if (external_node_v8_namespaceObject.startupSnapshot.isBuildingSnapshot()) return !1;
            } catch  {}
            const desc = Object.getOwnPropertyDescriptor(Error, "stackTraceLimit");
            return void 0 === desc ? Object.isExtensible(Error) : own$1.call(desc, "writable") && void 0 !== desc.writable ? desc.writable : void 0 !== desc.set;
        }
        codes.ERR_INVALID_ARG_TYPE = createError("ERR_INVALID_ARG_TYPE", (name, expected, actual)=>{
            external_node_assert_namespaceObject("string" == typeof name, "'name' must be a string"), Array.isArray(expected) || (expected = [
                expected
            ]);
            let message = "The ";
            if (name.endsWith(" argument")) message += `${name} `;
            else {
                const type = name.includes(".") ? "property" : "argument";
                message += `"${name}" ${type} `;
            }
            message += "must be ";
            const types = [], instances = [], other = [];
            for (const value of expected)external_node_assert_namespaceObject("string" == typeof value, "All expected entries have to be of type string"), kTypes.has(value) ? types.push(value.toLowerCase()) : null === classRegExp.exec(value) ? (external_node_assert_namespaceObject("object" !== value, 'The value "object" should be written as "Object"'), other.push(value)) : instances.push(value);
            if (instances.length > 0) {
                const pos = types.indexOf("object");
                -1 !== pos && (types.slice(pos, 1), instances.push("Object"));
            }
            return types.length > 0 && (message += `${types.length > 1 ? "one of type" : "of type"} ${formatList(types, "or")}`, (instances.length > 0 || other.length > 0) && (message += " or ")), instances.length > 0 && (message += `an instance of ${formatList(instances, "or")}`, other.length > 0 && (message += " or ")), other.length > 0 && (other.length > 1 ? message += `one of ${formatList(other, "or")}` : (other[0].toLowerCase() !== other[0] && (message += "an "), message += `${other[0]}`)), message += `. Received ${function(value) {
                if (null == value) return String(value);
                if ("function" == typeof value && value.name) return `function ${value.name}`;
                if ("object" == typeof value) return value.constructor && value.constructor.name ? `an instance of ${value.constructor.name}` : `${(0, external_node_util_namespaceObject.inspect)(value, {
                    depth: -1
                })}`;
                let inspected = (0, external_node_util_namespaceObject.inspect)(value, {
                    colors: !1
                });
                inspected.length > 28 && (inspected = `${inspected.slice(0, 25)}...`);
                return `type ${typeof value} (${inspected})`;
            }(actual)}`, message;
        }, TypeError), codes.ERR_INVALID_MODULE_SPECIFIER = createError("ERR_INVALID_MODULE_SPECIFIER", (request, reason, base = void 0)=>`Invalid module "${request}" ${reason}${base ? ` imported from ${base}` : ""}`, TypeError), codes.ERR_INVALID_PACKAGE_CONFIG = createError("ERR_INVALID_PACKAGE_CONFIG", (path, base, message)=>`Invalid package config ${path}${base ? ` while importing ${base}` : ""}${message ? `. ${message}` : ""}`, Error), codes.ERR_INVALID_PACKAGE_TARGET = createError("ERR_INVALID_PACKAGE_TARGET", (packagePath, key, target, isImport = !1, base = void 0)=>{
            const relatedError = "string" == typeof target && !isImport && target.length > 0 && !target.startsWith("./");
            return "." === key ? (external_node_assert_namespaceObject(!1 === isImport), `Invalid "exports" main target ${JSON.stringify(target)} defined in the package config ${packagePath}package.json${base ? ` imported from ${base}` : ""}${relatedError ? '; targets must start with "./"' : ""}`) : `Invalid "${isImport ? "imports" : "exports"}" target ${JSON.stringify(target)} defined for '${key}' in the package config ${packagePath}package.json${base ? ` imported from ${base}` : ""}${relatedError ? '; targets must start with "./"' : ""}`;
        }, Error), codes.ERR_MODULE_NOT_FOUND = createError("ERR_MODULE_NOT_FOUND", (path, base, exactUrl = !1)=>`Cannot find ${exactUrl ? "module" : "package"} '${path}' imported from ${base}`, Error), codes.ERR_NETWORK_IMPORT_DISALLOWED = createError("ERR_NETWORK_IMPORT_DISALLOWED", "import of '%s' by %s is not supported: %s", Error), codes.ERR_PACKAGE_IMPORT_NOT_DEFINED = createError("ERR_PACKAGE_IMPORT_NOT_DEFINED", (specifier, packagePath, base)=>`Package import specifier "${specifier}" is not defined${packagePath ? ` in package ${packagePath}package.json` : ""} imported from ${base}`, TypeError), codes.ERR_PACKAGE_PATH_NOT_EXPORTED = createError("ERR_PACKAGE_PATH_NOT_EXPORTED", (packagePath, subpath, base = void 0)=>"." === subpath ? `No "exports" main defined in ${packagePath}package.json${base ? ` imported from ${base}` : ""}` : `Package subpath '${subpath}' is not defined by "exports" in ${packagePath}package.json${base ? ` imported from ${base}` : ""}`, Error), codes.ERR_UNSUPPORTED_DIR_IMPORT = createError("ERR_UNSUPPORTED_DIR_IMPORT", "Directory import '%s' is not supported resolving ES modules imported from %s", Error), codes.ERR_UNSUPPORTED_RESOLVE_REQUEST = createError("ERR_UNSUPPORTED_RESOLVE_REQUEST", 'Failed to resolve module specifier "%s" from "%s": Invalid relative URL or base scheme is not hierarchical.', TypeError), codes.ERR_UNKNOWN_FILE_EXTENSION = createError("ERR_UNKNOWN_FILE_EXTENSION", (extension, path)=>`Unknown file extension "${extension}" for ${path}`, TypeError), codes.ERR_INVALID_ARG_VALUE = createError("ERR_INVALID_ARG_VALUE", (name, value, reason = "is invalid")=>{
            let inspected = (0, external_node_util_namespaceObject.inspect)(value);
            inspected.length > 128 && (inspected = `${inspected.slice(0, 128)}...`);
            return `The ${name.includes(".") ? "property" : "argument"} '${name}' ${reason}. Received ${inspected}`;
        }, TypeError);
        const captureLargerStackTrace = function(wrappedFunction) {
            const hidden = "__node_internal_" + wrappedFunction.name;
            return Object.defineProperty(wrappedFunction, "name", {
                value: hidden
            }), wrappedFunction;
        }(function(error) {
            const stackTraceLimitIsWritable = isErrorStackTraceLimitWritable();
            return stackTraceLimitIsWritable && (userStackTraceLimit = Error.stackTraceLimit, Error.stackTraceLimit = Number.POSITIVE_INFINITY), Error.captureStackTrace(error), stackTraceLimitIsWritable && (Error.stackTraceLimit = userStackTraceLimit), error;
        });
        const hasOwnProperty$1 = {}.hasOwnProperty, { ERR_INVALID_PACKAGE_CONFIG: ERR_INVALID_PACKAGE_CONFIG$1 } = codes, cache = new Map;
        function read(jsonPath, { base, specifier }) {
            const existing = cache.get(jsonPath);
            if (existing) return existing;
            let string;
            try {
                string = external_node_fs_namespaceObject.readFileSync(external_node_path_namespaceObject.toNamespacedPath(jsonPath), "utf8");
            } catch (error) {
                const exception = error;
                if ("ENOENT" !== exception.code) throw exception;
            }
            const result = {
                exists: !1,
                pjsonPath: jsonPath,
                main: void 0,
                name: void 0,
                type: "none",
                exports: void 0,
                imports: void 0
            };
            if (void 0 !== string) {
                let parsed;
                try {
                    parsed = JSON.parse(string);
                } catch (error_) {
                    const cause = error_, error = new ERR_INVALID_PACKAGE_CONFIG$1(jsonPath, (base ? `"${specifier}" from ` : "") + (0, external_node_url_namespaceObject.fileURLToPath)(base || specifier), cause.message);
                    throw error.cause = cause, error;
                }
                result.exists = !0, hasOwnProperty$1.call(parsed, "name") && "string" == typeof parsed.name && (result.name = parsed.name), hasOwnProperty$1.call(parsed, "main") && "string" == typeof parsed.main && (result.main = parsed.main), hasOwnProperty$1.call(parsed, "exports") && (result.exports = parsed.exports), hasOwnProperty$1.call(parsed, "imports") && (result.imports = parsed.imports), !hasOwnProperty$1.call(parsed, "type") || "commonjs" !== parsed.type && "module" !== parsed.type || (result.type = parsed.type);
            }
            return cache.set(jsonPath, result), result;
        }
        function getPackageScopeConfig(resolved) {
            let packageJSONUrl = new URL("package.json", resolved);
            for(;;){
                if (packageJSONUrl.pathname.endsWith("node_modules/package.json")) break;
                const packageConfig = read((0, external_node_url_namespaceObject.fileURLToPath)(packageJSONUrl), {
                    specifier: resolved
                });
                if (packageConfig.exists) return packageConfig;
                const lastPackageJSONUrl = packageJSONUrl;
                if (packageJSONUrl = new URL("../package.json", packageJSONUrl), packageJSONUrl.pathname === lastPackageJSONUrl.pathname) break;
            }
            return {
                pjsonPath: (0, external_node_url_namespaceObject.fileURLToPath)(packageJSONUrl),
                exists: !1,
                type: "none"
            };
        }
        function getPackageType(url) {
            return getPackageScopeConfig(url).type;
        }
        const { ERR_UNKNOWN_FILE_EXTENSION } = codes, dist_hasOwnProperty = {}.hasOwnProperty, extensionFormatMap = {
            __proto__: null,
            ".cjs": "commonjs",
            ".js": "module",
            ".json": "json",
            ".mjs": "module"
        };
        const protocolHandlers = {
            __proto__: null,
            "data:": function(parsed) {
                const { 1: mime } = /^([^/]+\/[^;,]+)[^,]*?(;base64)?,/.exec(parsed.pathname) || [
                    null,
                    null,
                    null
                ];
                return function(mime) {
                    return mime && /\s*(text|application)\/javascript\s*(;\s*charset=utf-?8\s*)?/i.test(mime) ? "module" : "application/json" === mime ? "json" : null;
                }(mime);
            },
            "file:": function(url, _context, ignoreErrors) {
                const value = function(url) {
                    const pathname = url.pathname;
                    let index = pathname.length;
                    for(; index--;){
                        const code = pathname.codePointAt(index);
                        if (47 === code) return "";
                        if (46 === code) return 47 === pathname.codePointAt(index - 1) ? "" : pathname.slice(index);
                    }
                    return "";
                }(url);
                if (".js" === value) {
                    const packageType = getPackageType(url);
                    return "none" !== packageType ? packageType : "commonjs";
                }
                if ("" === value) {
                    const packageType = getPackageType(url);
                    return "none" === packageType || "commonjs" === packageType ? "commonjs" : "module";
                }
                const format = extensionFormatMap[value];
                if (format) return format;
                if (ignoreErrors) return;
                const filepath = (0, external_node_url_namespaceObject.fileURLToPath)(url);
                throw new ERR_UNKNOWN_FILE_EXTENSION(value, filepath);
            },
            "http:": getHttpProtocolModuleFormat,
            "https:": getHttpProtocolModuleFormat,
            "node:": ()=>"builtin"
        };
        function getHttpProtocolModuleFormat() {}
        const RegExpPrototypeSymbolReplace = RegExp.prototype[Symbol.replace], { ERR_NETWORK_IMPORT_DISALLOWED, ERR_INVALID_MODULE_SPECIFIER, ERR_INVALID_PACKAGE_CONFIG, ERR_INVALID_PACKAGE_TARGET, ERR_MODULE_NOT_FOUND, ERR_PACKAGE_IMPORT_NOT_DEFINED, ERR_PACKAGE_PATH_NOT_EXPORTED, ERR_UNSUPPORTED_DIR_IMPORT, ERR_UNSUPPORTED_RESOLVE_REQUEST } = codes, own = {}.hasOwnProperty, invalidSegmentRegEx = /(^|\\|\/)((\.|%2e)(\.|%2e)?|(n|%6e|%4e)(o|%6f|%4f)(d|%64|%44)(e|%65|%45)(_|%5f)(m|%6d|%4d)(o|%6f|%4f)(d|%64|%44)(u|%75|%55)(l|%6c|%4c)(e|%65|%45)(s|%73|%53))?(\\|\/|$)/i, deprecatedInvalidSegmentRegEx = /(^|\\|\/)((\.|%2e)(\.|%2e)?|(n|%6e|%4e)(o|%6f|%4f)(d|%64|%44)(e|%65|%45)(_|%5f)(m|%6d|%4d)(o|%6f|%4f)(d|%64|%44)(u|%75|%55)(l|%6c|%4c)(e|%65|%45)(s|%73|%53))(\\|\/|$)/i, invalidPackageNameRegEx = /^\.|%|\\/, patternRegEx = /\*/g, encodedSeparatorRegEx = /%2f|%5c/i, emittedPackageWarnings = new Set, doubleSlashRegEx = /[/\\]{2}/;
        function emitInvalidSegmentDeprecation(target, request, match, packageJsonUrl, internal, base, isTarget) {
            if (external_node_process_namespaceObject.noDeprecation) return;
            const pjsonPath = (0, external_node_url_namespaceObject.fileURLToPath)(packageJsonUrl), double = null !== doubleSlashRegEx.exec(isTarget ? target : request);
            external_node_process_namespaceObject.emitWarning(`Use of deprecated ${double ? "double slash" : "leading or trailing slash matching"} resolving "${target}" for module request "${request}" ${request === match ? "" : `matched to "${match}" `}in the "${internal ? "imports" : "exports"}" field module resolution of the package at ${pjsonPath}${base ? ` imported from ${(0, external_node_url_namespaceObject.fileURLToPath)(base)}` : ""}.`, "DeprecationWarning", "DEP0166");
        }
        function emitLegacyIndexDeprecation(url, packageJsonUrl, base, main) {
            if (external_node_process_namespaceObject.noDeprecation) return;
            const format = function(url, context) {
                const protocol = url.protocol;
                return dist_hasOwnProperty.call(protocolHandlers, protocol) && protocolHandlers[protocol](url, context, !0) || null;
            }(url, {
                parentURL: base.href
            });
            if ("module" !== format) return;
            const urlPath = (0, external_node_url_namespaceObject.fileURLToPath)(url.href), packagePath = (0, external_node_url_namespaceObject.fileURLToPath)(new external_node_url_namespaceObject.URL(".", packageJsonUrl)), basePath = (0, external_node_url_namespaceObject.fileURLToPath)(base);
            main ? external_node_path_namespaceObject.resolve(packagePath, main) !== urlPath && external_node_process_namespaceObject.emitWarning(`Package ${packagePath} has a "main" field set to "${main}", excluding the full filename and extension to the resolved file at "${urlPath.slice(packagePath.length)}", imported from ${basePath}.\n Automatic extension resolution of the "main" field is deprecated for ES modules.`, "DeprecationWarning", "DEP0151") : external_node_process_namespaceObject.emitWarning(`No "main" or "exports" field defined in the package.json for ${packagePath} resolving the main entry point "${urlPath.slice(packagePath.length)}", imported from ${basePath}.\nDefault "index" lookups for the main are deprecated for ES modules.`, "DeprecationWarning", "DEP0151");
        }
        function tryStatSync(path) {
            try {
                return (0, external_node_fs_namespaceObject.statSync)(path);
            } catch  {}
        }
        function fileExists(url) {
            const stats = (0, external_node_fs_namespaceObject.statSync)(url, {
                throwIfNoEntry: !1
            }), isFile = stats ? stats.isFile() : void 0;
            return null != isFile && isFile;
        }
        function legacyMainResolve(packageJsonUrl, packageConfig, base) {
            let guess;
            if (void 0 !== packageConfig.main) {
                if (guess = new external_node_url_namespaceObject.URL(packageConfig.main, packageJsonUrl), fileExists(guess)) return guess;
                const tries = [
                    `./${packageConfig.main}.js`,
                    `./${packageConfig.main}.json`,
                    `./${packageConfig.main}.node`,
                    `./${packageConfig.main}/index.js`,
                    `./${packageConfig.main}/index.json`,
                    `./${packageConfig.main}/index.node`
                ];
                let i = -1;
                for(; ++i < tries.length && (guess = new external_node_url_namespaceObject.URL(tries[i], packageJsonUrl), !fileExists(guess));)guess = void 0;
                if (guess) return emitLegacyIndexDeprecation(guess, packageJsonUrl, base, packageConfig.main), guess;
            }
            const tries = [
                "./index.js",
                "./index.json",
                "./index.node"
            ];
            let i = -1;
            for(; ++i < tries.length && (guess = new external_node_url_namespaceObject.URL(tries[i], packageJsonUrl), !fileExists(guess));)guess = void 0;
            if (guess) return emitLegacyIndexDeprecation(guess, packageJsonUrl, base, packageConfig.main), guess;
            throw new ERR_MODULE_NOT_FOUND((0, external_node_url_namespaceObject.fileURLToPath)(new external_node_url_namespaceObject.URL(".", packageJsonUrl)), (0, external_node_url_namespaceObject.fileURLToPath)(base));
        }
        function exportsNotFound(subpath, packageJsonUrl, base) {
            return new ERR_PACKAGE_PATH_NOT_EXPORTED((0, external_node_url_namespaceObject.fileURLToPath)(new external_node_url_namespaceObject.URL(".", packageJsonUrl)), subpath, base && (0, external_node_url_namespaceObject.fileURLToPath)(base));
        }
        function invalidPackageTarget(subpath, target, packageJsonUrl, internal, base) {
            return target = "object" == typeof target && null !== target ? JSON.stringify(target, null, "") : `${target}`, new ERR_INVALID_PACKAGE_TARGET((0, external_node_url_namespaceObject.fileURLToPath)(new external_node_url_namespaceObject.URL(".", packageJsonUrl)), subpath, target, internal, base && (0, external_node_url_namespaceObject.fileURLToPath)(base));
        }
        function resolvePackageTargetString(target, subpath, match, packageJsonUrl, base, pattern, internal, isPathMap, conditions) {
            if ("" !== subpath && !pattern && "/" !== target[target.length - 1]) throw invalidPackageTarget(match, target, packageJsonUrl, internal, base);
            if (!target.startsWith("./")) {
                if (internal && !target.startsWith("../") && !target.startsWith("/")) {
                    let isURL = !1;
                    try {
                        new external_node_url_namespaceObject.URL(target), isURL = !0;
                    } catch  {}
                    if (!isURL) {
                        return packageResolve(pattern ? RegExpPrototypeSymbolReplace.call(patternRegEx, target, ()=>subpath) : target + subpath, packageJsonUrl, conditions);
                    }
                }
                throw invalidPackageTarget(match, target, packageJsonUrl, internal, base);
            }
            if (null !== invalidSegmentRegEx.exec(target.slice(2))) {
                if (null !== deprecatedInvalidSegmentRegEx.exec(target.slice(2))) throw invalidPackageTarget(match, target, packageJsonUrl, internal, base);
                if (!isPathMap) {
                    const request = pattern ? match.replace("*", ()=>subpath) : match + subpath;
                    emitInvalidSegmentDeprecation(pattern ? RegExpPrototypeSymbolReplace.call(patternRegEx, target, ()=>subpath) : target, request, match, packageJsonUrl, internal, base, !0);
                }
            }
            const resolved = new external_node_url_namespaceObject.URL(target, packageJsonUrl), resolvedPath = resolved.pathname, packagePath = new external_node_url_namespaceObject.URL(".", packageJsonUrl).pathname;
            if (!resolvedPath.startsWith(packagePath)) throw invalidPackageTarget(match, target, packageJsonUrl, internal, base);
            if ("" === subpath) return resolved;
            if (null !== invalidSegmentRegEx.exec(subpath)) {
                const request = pattern ? match.replace("*", ()=>subpath) : match + subpath;
                if (null === deprecatedInvalidSegmentRegEx.exec(subpath)) {
                    if (!isPathMap) {
                        emitInvalidSegmentDeprecation(pattern ? RegExpPrototypeSymbolReplace.call(patternRegEx, target, ()=>subpath) : target, request, match, packageJsonUrl, internal, base, !1);
                    }
                } else !function(request, match, packageJsonUrl, internal, base) {
                    const reason = `request is not a valid match in pattern "${match}" for the "${internal ? "imports" : "exports"}" resolution of ${(0, external_node_url_namespaceObject.fileURLToPath)(packageJsonUrl)}`;
                    throw new ERR_INVALID_MODULE_SPECIFIER(request, reason, base && (0, external_node_url_namespaceObject.fileURLToPath)(base));
                }(request, match, packageJsonUrl, internal, base);
            }
            return pattern ? new external_node_url_namespaceObject.URL(RegExpPrototypeSymbolReplace.call(patternRegEx, resolved.href, ()=>subpath)) : new external_node_url_namespaceObject.URL(subpath, resolved);
        }
        function isArrayIndex(key) {
            const keyNumber = Number(key);
            return `${keyNumber}` === key && keyNumber >= 0 && keyNumber < 4294967295;
        }
        function resolvePackageTarget(packageJsonUrl, target, subpath, packageSubpath, base, pattern, internal, isPathMap, conditions) {
            if ("string" == typeof target) return resolvePackageTargetString(target, subpath, packageSubpath, packageJsonUrl, base, pattern, internal, isPathMap, conditions);
            if (Array.isArray(target)) {
                const targetList = target;
                if (0 === targetList.length) return null;
                let lastException, i = -1;
                for(; ++i < targetList.length;){
                    const targetItem = targetList[i];
                    let resolveResult;
                    try {
                        resolveResult = resolvePackageTarget(packageJsonUrl, targetItem, subpath, packageSubpath, base, pattern, internal, isPathMap, conditions);
                    } catch (error) {
                        if (lastException = error, "ERR_INVALID_PACKAGE_TARGET" === error.code) continue;
                        throw error;
                    }
                    if (void 0 !== resolveResult) {
                        if (null !== resolveResult) return resolveResult;
                        lastException = null;
                    }
                }
                if (null == lastException) return null;
                throw lastException;
            }
            if ("object" == typeof target && null !== target) {
                const keys = Object.getOwnPropertyNames(target);
                let i = -1;
                for(; ++i < keys.length;){
                    if (isArrayIndex(keys[i])) throw new ERR_INVALID_PACKAGE_CONFIG((0, external_node_url_namespaceObject.fileURLToPath)(packageJsonUrl), base, '"exports" cannot contain numeric property keys.');
                }
                for(i = -1; ++i < keys.length;){
                    const key = keys[i];
                    if ("default" === key || conditions && conditions.has(key)) {
                        const resolveResult = resolvePackageTarget(packageJsonUrl, target[key], subpath, packageSubpath, base, pattern, internal, isPathMap, conditions);
                        if (void 0 === resolveResult) continue;
                        return resolveResult;
                    }
                }
                return null;
            }
            if (null === target) return null;
            throw invalidPackageTarget(packageSubpath, target, packageJsonUrl, internal, base);
        }
        function emitTrailingSlashPatternDeprecation(match, pjsonUrl, base) {
            if (external_node_process_namespaceObject.noDeprecation) return;
            const pjsonPath = (0, external_node_url_namespaceObject.fileURLToPath)(pjsonUrl);
            emittedPackageWarnings.has(pjsonPath + "|" + match) || (emittedPackageWarnings.add(pjsonPath + "|" + match), external_node_process_namespaceObject.emitWarning(`Use of deprecated trailing slash pattern mapping "${match}" in the "exports" field module resolution of the package at ${pjsonPath}${base ? ` imported from ${(0, external_node_url_namespaceObject.fileURLToPath)(base)}` : ""}. Mapping specifiers ending in "/" is no longer supported.`, "DeprecationWarning", "DEP0155"));
        }
        function packageExportsResolve(packageJsonUrl, packageSubpath, packageConfig, base, conditions) {
            let exports = packageConfig.exports;
            if (function(exports, packageJsonUrl, base) {
                if ("string" == typeof exports || Array.isArray(exports)) return !0;
                if ("object" != typeof exports || null === exports) return !1;
                const keys = Object.getOwnPropertyNames(exports);
                let isConditionalSugar = !1, i = 0, keyIndex = -1;
                for(; ++keyIndex < keys.length;){
                    const key = keys[keyIndex], currentIsConditionalSugar = "" === key || "." !== key[0];
                    if (0 == i++) isConditionalSugar = currentIsConditionalSugar;
                    else if (isConditionalSugar !== currentIsConditionalSugar) throw new ERR_INVALID_PACKAGE_CONFIG((0, external_node_url_namespaceObject.fileURLToPath)(packageJsonUrl), base, "\"exports\" cannot contain some keys starting with '.' and some not. The exports object must either be an object of package subpath keys or an object of main entry condition name keys only.");
                }
                return isConditionalSugar;
            }(exports, packageJsonUrl, base) && (exports = {
                ".": exports
            }), own.call(exports, packageSubpath) && !packageSubpath.includes("*") && !packageSubpath.endsWith("/")) {
                const resolveResult = resolvePackageTarget(packageJsonUrl, exports[packageSubpath], "", packageSubpath, base, !1, !1, !1, conditions);
                if (null == resolveResult) throw exportsNotFound(packageSubpath, packageJsonUrl, base);
                return resolveResult;
            }
            let bestMatch = "", bestMatchSubpath = "";
            const keys = Object.getOwnPropertyNames(exports);
            let i = -1;
            for(; ++i < keys.length;){
                const key = keys[i], patternIndex = key.indexOf("*");
                if (-1 !== patternIndex && packageSubpath.startsWith(key.slice(0, patternIndex))) {
                    packageSubpath.endsWith("/") && emitTrailingSlashPatternDeprecation(packageSubpath, packageJsonUrl, base);
                    const patternTrailer = key.slice(patternIndex + 1);
                    packageSubpath.length >= key.length && packageSubpath.endsWith(patternTrailer) && 1 === patternKeyCompare(bestMatch, key) && key.lastIndexOf("*") === patternIndex && (bestMatch = key, bestMatchSubpath = packageSubpath.slice(patternIndex, packageSubpath.length - patternTrailer.length));
                }
            }
            if (bestMatch) {
                const resolveResult = resolvePackageTarget(packageJsonUrl, exports[bestMatch], bestMatchSubpath, bestMatch, base, !0, !1, packageSubpath.endsWith("/"), conditions);
                if (null == resolveResult) throw exportsNotFound(packageSubpath, packageJsonUrl, base);
                return resolveResult;
            }
            throw exportsNotFound(packageSubpath, packageJsonUrl, base);
        }
        function patternKeyCompare(a, b) {
            const aPatternIndex = a.indexOf("*"), bPatternIndex = b.indexOf("*"), baseLengthA = -1 === aPatternIndex ? a.length : aPatternIndex + 1, baseLengthB = -1 === bPatternIndex ? b.length : bPatternIndex + 1;
            return baseLengthA > baseLengthB ? -1 : baseLengthB > baseLengthA || -1 === aPatternIndex ? 1 : -1 === bPatternIndex || a.length > b.length ? -1 : b.length > a.length ? 1 : 0;
        }
        function packageImportsResolve(name, base, conditions) {
            if ("#" === name || name.startsWith("#/") || name.endsWith("/")) {
                throw new ERR_INVALID_MODULE_SPECIFIER(name, "is not a valid internal imports specifier name", (0, external_node_url_namespaceObject.fileURLToPath)(base));
            }
            let packageJsonUrl;
            const packageConfig = getPackageScopeConfig(base);
            if (packageConfig.exists) {
                packageJsonUrl = (0, external_node_url_namespaceObject.pathToFileURL)(packageConfig.pjsonPath);
                const imports = packageConfig.imports;
                if (imports) if (own.call(imports, name) && !name.includes("*")) {
                    const resolveResult = resolvePackageTarget(packageJsonUrl, imports[name], "", name, base, !1, !0, !1, conditions);
                    if (null != resolveResult) return resolveResult;
                } else {
                    let bestMatch = "", bestMatchSubpath = "";
                    const keys = Object.getOwnPropertyNames(imports);
                    let i = -1;
                    for(; ++i < keys.length;){
                        const key = keys[i], patternIndex = key.indexOf("*");
                        if (-1 !== patternIndex && name.startsWith(key.slice(0, -1))) {
                            const patternTrailer = key.slice(patternIndex + 1);
                            name.length >= key.length && name.endsWith(patternTrailer) && 1 === patternKeyCompare(bestMatch, key) && key.lastIndexOf("*") === patternIndex && (bestMatch = key, bestMatchSubpath = name.slice(patternIndex, name.length - patternTrailer.length));
                        }
                    }
                    if (bestMatch) {
                        const resolveResult = resolvePackageTarget(packageJsonUrl, imports[bestMatch], bestMatchSubpath, bestMatch, base, !0, !0, !1, conditions);
                        if (null != resolveResult) return resolveResult;
                    }
                }
            }
            throw function(specifier, packageJsonUrl, base) {
                return new ERR_PACKAGE_IMPORT_NOT_DEFINED(specifier, packageJsonUrl && (0, external_node_url_namespaceObject.fileURLToPath)(new external_node_url_namespaceObject.URL(".", packageJsonUrl)), (0, external_node_url_namespaceObject.fileURLToPath)(base));
            }(name, packageJsonUrl, base);
        }
        function packageResolve(specifier, base, conditions) {
            if (external_node_module_namespaceObject.builtinModules.includes(specifier)) return new external_node_url_namespaceObject.URL("node:" + specifier);
            const { packageName, packageSubpath, isScoped } = function(specifier, base) {
                let separatorIndex = specifier.indexOf("/"), validPackageName = !0, isScoped = !1;
                "@" === specifier[0] && (isScoped = !0, -1 === separatorIndex || 0 === specifier.length ? validPackageName = !1 : separatorIndex = specifier.indexOf("/", separatorIndex + 1));
                const packageName = -1 === separatorIndex ? specifier : specifier.slice(0, separatorIndex);
                if (null !== invalidPackageNameRegEx.exec(packageName) && (validPackageName = !1), !validPackageName) throw new ERR_INVALID_MODULE_SPECIFIER(specifier, "is not a valid package name", (0, external_node_url_namespaceObject.fileURLToPath)(base));
                return {
                    packageName,
                    packageSubpath: "." + (-1 === separatorIndex ? "" : specifier.slice(separatorIndex)),
                    isScoped
                };
            }(specifier, base), packageConfig = getPackageScopeConfig(base);
            if (packageConfig.exists) {
                const packageJsonUrl = (0, external_node_url_namespaceObject.pathToFileURL)(packageConfig.pjsonPath);
                if (packageConfig.name === packageName && void 0 !== packageConfig.exports && null !== packageConfig.exports) return packageExportsResolve(packageJsonUrl, packageSubpath, packageConfig, base, conditions);
            }
            let lastPath, packageJsonUrl = new external_node_url_namespaceObject.URL("./node_modules/" + packageName + "/package.json", base), packageJsonPath = (0, external_node_url_namespaceObject.fileURLToPath)(packageJsonUrl);
            do {
                const stat = tryStatSync(packageJsonPath.slice(0, -13));
                if (!stat || !stat.isDirectory()) {
                    lastPath = packageJsonPath, packageJsonUrl = new external_node_url_namespaceObject.URL((isScoped ? "../../../../node_modules/" : "../../../node_modules/") + packageName + "/package.json", packageJsonUrl), packageJsonPath = (0, external_node_url_namespaceObject.fileURLToPath)(packageJsonUrl);
                    continue;
                }
                const packageConfig = read(packageJsonPath, {
                    base,
                    specifier
                });
                return void 0 !== packageConfig.exports && null !== packageConfig.exports ? packageExportsResolve(packageJsonUrl, packageSubpath, packageConfig, base, conditions) : "." === packageSubpath ? legacyMainResolve(packageJsonUrl, packageConfig, base) : new external_node_url_namespaceObject.URL(packageSubpath, packageJsonUrl);
            }while (packageJsonPath.length !== lastPath.length)
            throw new ERR_MODULE_NOT_FOUND(packageName, (0, external_node_url_namespaceObject.fileURLToPath)(base), !1);
        }
        function moduleResolve(specifier, base, conditions, preserveSymlinks) {
            const protocol = base.protocol, isRemote = "data:" === protocol || "http:" === protocol || "https:" === protocol;
            let resolved;
            if (function(specifier) {
                return "" !== specifier && ("/" === specifier[0] || function(specifier) {
                    if ("." === specifier[0]) {
                        if (1 === specifier.length || "/" === specifier[1]) return !0;
                        if ("." === specifier[1] && (2 === specifier.length || "/" === specifier[2])) return !0;
                    }
                    return !1;
                }(specifier));
            }(specifier)) try {
                resolved = new external_node_url_namespaceObject.URL(specifier, base);
            } catch (error_) {
                const error = new ERR_UNSUPPORTED_RESOLVE_REQUEST(specifier, base);
                throw error.cause = error_, error;
            }
            else if ("file:" === protocol && "#" === specifier[0]) resolved = packageImportsResolve(specifier, base, conditions);
            else try {
                resolved = new external_node_url_namespaceObject.URL(specifier);
            } catch (error_) {
                if (isRemote && !external_node_module_namespaceObject.builtinModules.includes(specifier)) {
                    const error = new ERR_UNSUPPORTED_RESOLVE_REQUEST(specifier, base);
                    throw error.cause = error_, error;
                }
                resolved = packageResolve(specifier, base, conditions);
            }
            return external_node_assert_namespaceObject(void 0 !== resolved, "expected to be defined"), "file:" !== resolved.protocol ? resolved : function(resolved, base, preserveSymlinks) {
                if (null !== encodedSeparatorRegEx.exec(resolved.pathname)) throw new ERR_INVALID_MODULE_SPECIFIER(resolved.pathname, 'must not include encoded "/" or "\\" characters', (0, external_node_url_namespaceObject.fileURLToPath)(base));
                let filePath;
                try {
                    filePath = (0, external_node_url_namespaceObject.fileURLToPath)(resolved);
                } catch (error) {
                    const cause = error;
                    throw Object.defineProperty(cause, "input", {
                        value: String(resolved)
                    }), Object.defineProperty(cause, "module", {
                        value: String(base)
                    }), cause;
                }
                const stats = tryStatSync(filePath.endsWith("/") ? filePath.slice(-1) : filePath);
                if (stats && stats.isDirectory()) {
                    const error = new ERR_UNSUPPORTED_DIR_IMPORT(filePath, (0, external_node_url_namespaceObject.fileURLToPath)(base));
                    throw error.url = String(resolved), error;
                }
                if (!stats || !stats.isFile()) {
                    const error = new ERR_MODULE_NOT_FOUND(filePath || resolved.pathname, base && (0, external_node_url_namespaceObject.fileURLToPath)(base), !0);
                    throw error.url = String(resolved), error;
                }
                if (!preserveSymlinks) {
                    const real = (0, external_node_fs_namespaceObject.realpathSync)(filePath), { search, hash } = resolved;
                    (resolved = (0, external_node_url_namespaceObject.pathToFileURL)(real + (filePath.endsWith(external_node_path_namespaceObject.sep) ? "/" : ""))).search = search, resolved.hash = hash;
                }
                return resolved;
            }(resolved, base, preserveSymlinks);
        }
        function fileURLToPath(id) {
            return "string" != typeof id || id.startsWith("file://") ? normalizeSlash((0, external_node_url_namespaceObject.fileURLToPath)(id)) : normalizeSlash(id);
        }
        function pathToFileURL(id) {
            return (0, external_node_url_namespaceObject.pathToFileURL)(fileURLToPath(id)).toString();
        }
        const DEFAULT_CONDITIONS_SET = new Set([
            "node",
            "import"
        ]), DEFAULT_EXTENSIONS = [
            ".mjs",
            ".cjs",
            ".js",
            ".json"
        ], NOT_FOUND_ERRORS = new Set([
            "ERR_MODULE_NOT_FOUND",
            "ERR_UNSUPPORTED_DIR_IMPORT",
            "MODULE_NOT_FOUND",
            "ERR_PACKAGE_PATH_NOT_EXPORTED"
        ]);
        function _tryModuleResolve(id, url, conditions) {
            try {
                return moduleResolve(id, url, conditions);
            } catch (error) {
                if (!NOT_FOUND_ERRORS.has(error?.code)) throw error;
            }
        }
        function _resolve(id, options = {}) {
            if ("string" != typeof id) {
                if (!(id instanceof URL)) throw new TypeError("input must be a `string` or `URL`");
                id = fileURLToPath(id);
            }
            if (/(node|data|http|https):/.test(id)) return id;
            if (BUILTIN_MODULES.has(id)) return "node:" + id;
            if (id.startsWith("file://") && (id = fileURLToPath(id)), isAbsolute(id)) try {
                if ((0, external_node_fs_namespaceObject.statSync)(id).isFile()) return pathToFileURL(id);
            } catch (error) {
                if ("ENOENT" !== error?.code) throw error;
            }
            const conditionsSet = options.conditions ? new Set(options.conditions) : DEFAULT_CONDITIONS_SET, _urls = (Array.isArray(options.url) ? options.url : [
                options.url
            ]).filter(Boolean).map((url)=>new URL(function(id) {
                    return "string" != typeof id && (id = id.toString()), /(node|data|http|https|file):/.test(id) ? id : BUILTIN_MODULES.has(id) ? "node:" + id : "file://" + encodeURI(normalizeSlash(id));
                }(url.toString())));
            0 === _urls.length && _urls.push(new URL(pathToFileURL(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cwd())));
            const urls = [
                ..._urls
            ];
            for (const url of _urls)"file:" === url.protocol && urls.push(new URL("./", url), new URL(dist_joinURL(url.pathname, "_index.js"), url), new URL("node_modules", url));
            let resolved;
            for (const url of urls){
                if (resolved = _tryModuleResolve(id, url, conditionsSet), resolved) break;
                for (const prefix of [
                    "",
                    "/index"
                ]){
                    for (const extension of options.extensions || DEFAULT_EXTENSIONS)if (resolved = _tryModuleResolve(dist_joinURL(id, prefix) + extension, url, conditionsSet), resolved) break;
                    if (resolved) break;
                }
                if (resolved) break;
            }
            if (!resolved) {
                const error = new Error(`Cannot find module ${id} imported from ${urls.join(", ")}`);
                throw error.code = "ERR_MODULE_NOT_FOUND", error;
            }
            return pathToFileURL(resolved);
        }
        function resolveSync(id, options) {
            return _resolve(id, options);
        }
        function resolvePathSync(id, options) {
            return fileURLToPath(resolveSync(id, options));
        }
        const ESM_RE = /([\s;]|^)(import[\s\w*,{}]*from|import\s*["'*{]|export\b\s*(?:[*{]|default|class|type|function|const|var|let|async function)|import\.meta\b)/m, COMMENT_RE = /\/\*.+?\*\/|\/\/.*(?=[nr])/g;
        function hasESMSyntax(code, opts = {}) {
            return opts.stripComments && (code = code.replace(COMMENT_RE, "")), ESM_RE.test(code);
        }
        var external_crypto_ = __webpack_require__("crypto");
        function md5(content, len = 8) {
            return (0, external_crypto_.createHash)("md5").update(content).digest("hex").slice(0, len);
        }
        var __awaiter = function(thisArg, _arguments, P, generator) {
            return new (P || (P = Promise))(function(resolve, reject) {
                function fulfilled(value) {
                    try {
                        step(generator.next(value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function rejected(value) {
                    try {
                        step(generator.throw(value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function step(result) {
                    var value;
                    result.done ? resolve(result.value) : (value = result.value, value instanceof P ? value : new P(function(resolve) {
                        resolve(value);
                    })).then(fulfilled, rejected);
                }
                step((generator = generator.apply(thisArg, _arguments || [])).next());
            });
        };
        const _EnvDebug = destr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.JITI_DEBUG), _EnvCache = destr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.JITI_CACHE), _EnvESMResolve = destr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.JITI_ESM_RESOLVE), _EnvRequireCache = destr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.JITI_REQUIRE_CACHE), _EnvSourceMaps = destr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.JITI_SOURCE_MAPS), _EnvAlias = destr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.JITI_ALIAS), _EnvTransform = destr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.JITI_TRANSFORM_MODULES), _EnvNative = destr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.JITI_NATIVE_MODULES), _ExpBun = destr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.JITI_EXPERIMENTAL_BUN), isWindows = "win32" === (0, external_os_namespaceObject.platform)(), defaults = {
            debug: _EnvDebug,
            cache: void 0 === _EnvCache || !!_EnvCache,
            requireCache: void 0 === _EnvRequireCache || !!_EnvRequireCache,
            sourceMaps: void 0 !== _EnvSourceMaps && !!_EnvSourceMaps,
            interopDefault: !1,
            esmResolve: _EnvESMResolve || !1,
            cacheVersion: "7",
            legacy: (0, semver.lt)(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].version || "0.0.0", "14.0.0"),
            extensions: [
                ".js",
                ".mjs",
                ".cjs",
                ".ts",
                ".mts",
                ".cts",
                ".json"
            ],
            alias: _EnvAlias,
            nativeModules: _EnvNative || [],
            transformModules: _EnvTransform || [],
            experimentalBun: void 0 === _ExpBun ? !!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions.bun : !!_ExpBun
        }, JS_EXT_RE = /\.(c|m)?j(sx?)$/, TS_EXT_RE = /\.(c|m)?t(sx?)$/;
        function createJITI(_filename, opts = {}, parentModule, parentCache) {
            (opts = Object.assign(Object.assign({}, defaults), opts)).legacy && (opts.cacheVersion += "-legacy"), opts.transformOptions && (opts.cacheVersion += "-" + object_hash_default()(opts.transformOptions));
            const alias = opts.alias && Object.keys(opts.alias).length > 0 ? normalizeAliases(opts.alias || {}) : null, nativeModules = [
                "typescript",
                "jiti",
                ...opts.nativeModules || []
            ], transformModules = [
                ...opts.transformModules || []
            ], isNativeRe = new RegExp(`node_modules/(${nativeModules.map((m)=>escapeStringRegexp(m)).join("|")})/`), isTransformRe = new RegExp(`node_modules/(${transformModules.map((m)=>escapeStringRegexp(m)).join("|")})/`);
            function debug(...args) {
                opts.debug && console.log("[jiti]", ...args);
            }
            if (_filename || (_filename = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cwd()), function(filename) {
                try {
                    return (0, external_fs_.lstatSync)(filename).isDirectory();
                } catch (_a) {
                    return !1;
                }
            }(_filename) && (_filename = join(_filename, "index.js")), !0 === opts.cache && (opts.cache = function() {
                let _tmpDir = (0, external_os_namespaceObject.tmpdir)();
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.TMPDIR && _tmpDir === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cwd() && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.JITI_RESPECT_TMPDIR_ENV) {
                    const _env = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.TMPDIR;
                    delete __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.TMPDIR, _tmpDir = (0, external_os_namespaceObject.tmpdir)(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.TMPDIR = _env;
                }
                return join(_tmpDir, "node-jiti");
            }()), opts.cache) try {
                if ((0, external_fs_.mkdirSync)(opts.cache, {
                    recursive: !0
                }), !function(filename) {
                    try {
                        return (0, external_fs_.accessSync)(filename, external_fs_.constants.W_OK), !0;
                    } catch (_a) {
                        return !1;
                    }
                }(opts.cache)) throw new Error("directory is not writable");
            } catch (error) {
                debug("Error creating cache directory at ", opts.cache, error), opts.cache = !1;
            }
            const nativeRequire = create_require_default()(isWindows ? _filename.replace(/\//g, "\\") : _filename), tryResolve = (id, options)=>{
                try {
                    return nativeRequire.resolve(id, options);
                } catch (_a) {}
            }, _url = (0, external_url_namespaceObject.pathToFileURL)(_filename), _additionalExts = [
                ...opts.extensions
            ].filter((ext)=>".js" !== ext), _resolve = (id, options)=>{
                let resolved, err;
                if (alias && (id = function(path, aliases) {
                    const _path = normalizeWindowsPath(path);
                    aliases = normalizeAliases(aliases);
                    for (const [alias, to] of Object.entries(aliases)){
                        if (!_path.startsWith(alias)) continue;
                        const _alias = hasTrailingSlash(alias) ? alias.slice(0, -1) : alias;
                        if (hasTrailingSlash(_path[_alias.length])) return join(to, _path.slice(alias.length));
                    }
                    return _path;
                }(id, alias)), opts.esmResolve) {
                    const conditionSets = [
                        [
                            "node",
                            "require"
                        ],
                        [
                            "node",
                            "import"
                        ]
                    ];
                    for (const conditions of conditionSets){
                        try {
                            resolved = resolvePathSync(id, {
                                url: _url,
                                conditions,
                                extensions: opts.extensions
                            });
                        } catch (error) {
                            err = error;
                        }
                        if (resolved) return resolved;
                    }
                }
                try {
                    return nativeRequire.resolve(id, options);
                } catch (error) {
                    err = error;
                }
                for (const ext of _additionalExts){
                    if (resolved = tryResolve(id + ext, options) || tryResolve(id + "/index" + ext, options), resolved) return resolved;
                    if (TS_EXT_RE.test((null == parentModule ? void 0 : parentModule.filename) || "") && (resolved = tryResolve(id.replace(JS_EXT_RE, ".$1t$2"), options), resolved)) return resolved;
                }
                throw err;
            };
            function transform(topts) {
                let code = function(filename, source, get) {
                    if (!opts.cache || !filename) return get();
                    const sourceHash = ` /* v${opts.cacheVersion}-${md5(source, 16)} */`, filebase = basename(pathe_ff20891b_dirname(filename)) + "-" + basename(filename), cacheFile = join(opts.cache, filebase + "." + md5(filename) + ".js");
                    if ((0, external_fs_.existsSync)(cacheFile)) {
                        const cacheSource = (0, external_fs_.readFileSync)(cacheFile, "utf8");
                        if (cacheSource.endsWith(sourceHash)) return debug("[cache hit]", filename, "~>", cacheFile), cacheSource;
                    }
                    debug("[cache miss]", filename);
                    const result = get();
                    return result.includes("__JITI_ERROR__") || (0, external_fs_.writeFileSync)(cacheFile, result + sourceHash, "utf8"), result;
                }(topts.filename, topts.source, ()=>{
                    var _a;
                    const res = opts.transform(Object.assign(Object.assign(Object.assign({
                        legacy: opts.legacy
                    }, opts.transformOptions), {
                        babel: Object.assign(Object.assign({}, opts.sourceMaps ? {
                            sourceFileName: topts.filename,
                            sourceMaps: "inline"
                        } : {}), null === (_a = opts.transformOptions) || void 0 === _a ? void 0 : _a.babel)
                    }), topts));
                    return res.error && opts.debug && debug(res.error), res.code;
                });
                return code.startsWith("#!") && (code = "// " + code), code;
            }
            function _interopDefault(mod) {
                return opts.interopDefault ? function(sourceModule, opts = {}) {
                    if (null === (value = sourceModule) || "object" != typeof value || !("default" in sourceModule)) return sourceModule;
                    var value;
                    const defaultValue = sourceModule.default;
                    if (null == defaultValue) return sourceModule;
                    const _defaultType = typeof defaultValue;
                    if ("object" !== _defaultType && ("function" !== _defaultType || opts.preferNamespace)) return opts.preferNamespace ? sourceModule : defaultValue;
                    for(const key in sourceModule)try {
                        key in defaultValue || Object.defineProperty(defaultValue, key, {
                            enumerable: "default" !== key,
                            configurable: "default" !== key,
                            get: ()=>sourceModule[key]
                        });
                    } catch  {}
                    return defaultValue;
                }(mod) : mod;
            }
            function jiti(id, _importOptions) {
                var _a;
                const cache = parentCache || {};
                if (id.startsWith("node:") ? id = id.slice(5) : id.startsWith("file:") && (id = (0, external_url_namespaceObject.fileURLToPath)(id)), external_module_.builtinModules.includes(id) || ".pnp.js" === id) return nativeRequire(id);
                if (opts.experimentalBun && !opts.transformOptions) try {
                    debug(`[bun] [native] ${id}`);
                    const _mod = nativeRequire(id);
                    return !1 === opts.requireCache && delete nativeRequire.cache[id], _interopDefault(_mod);
                } catch (error) {
                    debug(`[bun] Using fallback for ${id} because of an error:`, error);
                }
                const filename = _resolve(id), ext = extname(filename);
                if (".json" === ext) {
                    debug("[json]", filename);
                    const jsonModule = nativeRequire(id);
                    return Object.defineProperty(jsonModule, "default", {
                        value: jsonModule
                    }), jsonModule;
                }
                if (ext && !opts.extensions.includes(ext)) return debug("[unknown]", filename), nativeRequire(id);
                if (isNativeRe.test(filename)) return debug("[native]", filename), nativeRequire(id);
                if (cache[filename] && (!0 === cache[filename].loaded || !1 === (null == parentModule ? void 0 : parentModule.loaded))) return _interopDefault(null === (_a = cache[filename]) || void 0 === _a ? void 0 : _a.exports);
                if (opts.requireCache && nativeRequire.cache[filename]) {
                    const cacheEntry = nativeRequire.cache[filename];
                    if (null == cacheEntry ? void 0 : cacheEntry.loaded) return _interopDefault(cacheEntry.exports);
                }
                return evalModule((0, external_fs_.readFileSync)(filename, "utf8"), {
                    id,
                    filename,
                    ext,
                    cache
                });
            }
            function evalModule(source, evalOptions = {}) {
                var _a;
                const id = evalOptions.id || (evalOptions.filename ? basename(evalOptions.filename) : `_jitiEval.${evalOptions.ext || ".js"}`), filename = evalOptions.filename || _resolve(id), ext = evalOptions.ext || extname(filename), cache = evalOptions.cache || parentCache || {}, isTypescript = ".ts" === ext || ".mts" === ext || ".cts" === ext, isNativeModule = ".mjs" === ext || ".js" === ext && "module" === (null === (_a = function(path) {
                    for(; path && "." !== path && "/" !== path;){
                        path = join(path, "..");
                        try {
                            const pkg = (0, external_fs_.readFileSync)(join(path, "package.json"), "utf8");
                            try {
                                return JSON.parse(pkg);
                            } catch (_a) {}
                            break;
                        } catch (_b) {}
                    }
                }(filename)) || void 0 === _a ? void 0 : _a.type), needsTranspile = !(".cjs" === ext) && (isTypescript || isNativeModule || isTransformRe.test(filename) || hasESMSyntax(source) || opts.legacy && source.match(/\?\.|\?\?/));
                const start = external_perf_hooks_namespaceObject.performance.now();
                if (needsTranspile) {
                    source = transform({
                        filename,
                        source,
                        ts: isTypescript
                    });
                    debug("[transpile]" + (isNativeModule ? " [esm]" : ""), filename, `(${Math.round(1e3 * (external_perf_hooks_namespaceObject.performance.now() - start)) / 1e3}ms)`);
                } else try {
                    return debug("[native]", filename), _interopDefault(nativeRequire(id));
                } catch (error) {
                    debug("Native require error:", error), debug("[fallback]", filename), source = transform({
                        filename,
                        source,
                        ts: isTypescript
                    });
                }
                const mod = new external_module_.Module(filename);
                let compiled;
                mod.filename = filename, parentModule && (mod.parent = parentModule, Array.isArray(parentModule.children) && !parentModule.children.includes(mod) && parentModule.children.push(mod)), mod.require = createJITI(filename, opts, mod, cache), mod.path = pathe_ff20891b_dirname(filename), mod.paths = external_module_.Module._nodeModulePaths(mod.path), cache[filename] = mod, opts.requireCache && (nativeRequire.cache[filename] = mod);
                try {
                    compiled = external_vm_default().runInThisContext(external_module_.Module.wrap(source), {
                        filename,
                        lineOffset: 0,
                        displayErrors: !1
                    });
                } catch (error) {
                    opts.requireCache && delete nativeRequire.cache[filename], opts.onError(error);
                }
                try {
                    compiled(mod.exports, mod.require, mod, mod.filename, pathe_ff20891b_dirname(mod.filename));
                } catch (error) {
                    opts.requireCache && delete nativeRequire.cache[filename], opts.onError(error);
                }
                if (mod.exports && mod.exports.__JITI_ERROR__) {
                    const { filename, line, column, code, message } = mod.exports.__JITI_ERROR__, err = new Error(`${code}: ${message} \n ${`${filename}:${line}:${column}`}`);
                    Error.captureStackTrace(err, jiti), opts.onError(err);
                }
                mod.loaded = !0;
                return _interopDefault(mod.exports);
            }
            return _resolve.paths = nativeRequire.resolve.paths, jiti.resolve = _resolve, jiti.cache = opts.requireCache ? nativeRequire.cache : {}, jiti.extensions = nativeRequire.extensions, jiti.main = nativeRequire.main, jiti.transform = transform, jiti.register = function() {
                return (0, lib.addHook)((source, filename)=>jiti.transform({
                        source,
                        filename,
                        ts: !!/\.[cm]?ts$/.test(filename)
                    }), {
                    exts: opts.extensions
                });
            }, jiti.evalModule = evalModule, jiti.import = (id, importOptions)=>__awaiter(this, void 0, void 0, function*() {
                    return yield jiti(id);
                }), jiti;
        }
    })(), module.exports = __webpack_exports__.default;
})();
}}),
}]);

//# sourceMappingURL=59749_jiti_dist_jiti_ab9897f6.js.map