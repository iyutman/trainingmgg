{ type: 'after',
  arguments:
   [ { transbeliNo: 'trnsbeli-0003',
       penjual: 'ud jaya makmur',
       userId: '5d5a00351162b304b847162a',
       transbeliNote: null,
       totaljmlhBarang: 1,
       totalhargaBarang: 5000,
       transbeliDetail: [Array] },
     { query: {},
       route: {},
       provider: 'rest',
       headers: [Object],
       authenticated: true,
       user: [Object],
       payload: [Object] } ],
  service:
   { options:
      { events: [],
        paginate: [Object],
        multi: false,
        id: '_id',
        whitelist: [Array],
        filters: [Object],
        Model: Model { transaksiBeli } },
     discriminatorKey: '__t',
     discriminators: {},
     lean: true,
     overwrite: true,
     useEstimatedDocumentCount: false,
     find: [Function: newMethod],
     get: [Function: newMethod],
     create: [Function: newMethod],
     update: [Function: newMethod],
     patch: [Function: newMethod],
     remove: [Function: newMethod],
     methods:
      { find: [Array],
        get: [Array],
        create: [Array],
        update: [Array],
        patch: [Array],
        remove: [Array] },
     hooks: [Function: hooks],
     _events:
      [Object: null prototype] {
        created: [Function],
        updated: [Function],
        removed: [Function],
        patched: [Function] },
     _eventsCount: 4,
     _maxListeners: undefined,
     setMaxListeners: [Function: setMaxListeners],
     getMaxListeners: [Function: getMaxListeners],
     emit: [Function: emit],
     addListener: [Function: addListener],
     on: [Function: addListener],
     prependListener: [Function: prependListener],
     once: [Function: once],
     prependOnceListener: [Function: prependOnceListener],
     removeListener: [Function: removeListener],
     off: [Function: removeListener],
     removeAllListeners: [Function: removeAllListeners],
     listeners: [Function: listeners],
     rawListeners: [Function: rawListeners],
     listenerCount: [Function: listenerCount],
     eventNames: [Function: eventNames],
     publish: [Function: publish],
     _super: undefined,
     [Symbol(@feathersjs/transport-commons/publishers)]: {} },
  app:
   { [EventEmitter: app]
     _events:
      [Object: null prototype] {
        mount: [Function: onmount],
        publish: [Function],
        connection: [Function],
        login: [Function] },
     _eventsCount: 4,
     _maxListeners: undefined,
     setMaxListeners: [Function: setMaxListeners],
     getMaxListeners: [Function: getMaxListeners],
     emit: [Function: emit],
     addListener: [Function: addListener],
     on: [Function: addListener],
     prependListener: [Function: prependListener],
     once: [Function: once],
     prependOnceListener: [Function: prependOnceListener],
     removeListener: [Function: removeListener],
     off: [Function: removeListener],
     removeAllListeners: [Function: removeAllListeners],
     listeners: [Function: listeners],
     rawListeners: [Function: rawListeners],
     listenerCount: [Function: listenerCount],
     eventNames: [Function: eventNames],
     init: [Function: init],
     defaultConfiguration: [Function: defaultConfiguration],
     lazyrouter: [Function: lazyrouter],
     handle: [Function: handle],
     use: [Function: newMethod],
     route: [Function: route],
     engine: [Function: engine],
     param: [Function: param],
     set: [Function: set],
     path: [Function: path],
     enabled: [Function: enabled],
     disabled: [Function: disabled],
     enable: [Function: enable],
     disable: [Function: disable],
     acl: [Function],
     bind: [Function],
     checkout: [Function],
     connect: [Function],
     copy: [Function],
     delete: [Function],
     get: [Function],
     head: [Function],
     link: [Function],
     lock: [Function],
     'm-search': [Function],
     merge: [Function],
     mkactivity: [Function],
     mkcalendar: [Function],
     mkcol: [Function],
     move: [Function],
     notify: [Function],
     options: [Function],
     patch: [Function],
     post: [Function],
     propfind: [Function],
     proppatch: [Function],
     purge: [Function],
     put: [Function],
     rebind: [Function],
     report: [Function],
     search: [Function],
     source: [Function],
     subscribe: [Function],
     trace: [Function],
     unbind: [Function],
     unlink: [Function],
     unlock: [Function],
     unsubscribe: [Function],
     all: [Function: all],
     del: [Function],
     render: [Function: render],
     listen: [Function: newMethod],
     request: IncomingMessage { app: [Circular] },
     response: ServerResponse { app: [Circular] },
     cache: {},
     engines: {},
     settings:
      { 'x-powered-by': true,
        etag: 'weak',
        'etag fn': [Function: generateETag],
        env: 'development',
        'query parser': 'extended',
        'query parser fn': [Function: parseExtendedQueryString],
        'subdomain offset': 2,
        'trust proxy': false,
        'trust proxy fn': [Function: trustNone],
        view: [Function: View],
        views: 'E:\\Mgg Software\\testfather\\inventory-app\\views',
        'jsonp callback name': 'callback',
        host: 'localhost',
        port: 4041,
        public: 'E:\\Mgg Software\\testfather\\inventory-app\\public',
        paginate: [Object],
        authentication: [Object],
        mongodb: 'mongodb://localhost:27017/inventoryApp',
        mongooseClient: [Mongoose],
        auth: [Object] },
     locals: [Object: null prototype] { settings: [Object] },
     mountpath: '/',
     configure: [Function: configure],
     service: [Function: service],
     setup: [Function],
     version: '3.3.1',
     methods: [ 'find', 'get', 'create', 'update', 'patch', 'remove' ],
     mixins:
      [ [Function: hookMixin],
        [Function: eventMixin],
        [Function],
        [Function],
        [Function] ],
     services:
      { authentication: [Object],
        users: [Object],
        hello: [Object],
        barang: [Object],
        customer: [Object],
        'transaksi-jual': [Object],
        'transaksi-beli': [Object] },
     providers: [ [Function] ],
     _setup: false,
     hookTypes: [ 'before', 'after', 'error', 'finally' ],
     hooks: [Function: hooks],
     eventMappings:
      { create: 'created',
        update: 'updated',
        remove: 'removed',
        patch: 'patched' },
     _super: undefined,
     _router:
      { [Function: router]
        params: {},
        _params: [],
        caseSensitive: false,
        mergeParams: undefined,
        strict: false,
        stack: [Array] },
     rest:
      { find: [Function],
        get: [Function],
        create: [Function],
        update: [Function],
        patch: [Function],
        remove: [Function] },
     channel: [Function: channel],
     publish: [Function: publish],
     lookup: [Function: lookup],
     passport:
      Authenticator {
        _key: 'passport',
        _strategies: [Object],
        _serializers: [],
        _deserializers: [],
        _infoTransformers: [],
        _framework: [Object],
        _userProperty: 'user',
        _sm: [SessionManager],
        Authenticator: [Function: Authenticator],
        Passport: [Function: Authenticator],
        Strategy: [Function],
        strategies: [Object],
        _feathers: [Object],
        createJWT: [Function: createJWT],
        verifyJWT: [Function: verifyJWT],
        options: [Function] },
     authenticate: [Function: bound ],
     io:
      Server {
        nsps: [Object],
        parentNsps: Map {},
        _path: '/socket.io',
        _serveClient: true,
        parser: [Object],
        encoder: Encoder {},
        _adapter: [Function: Adapter],
        _origins: '*:*',
        sockets: [Namespace],
        eio: [Server],
        httpServer: [Server],
        engine: [Server] },
     _isSetup: true,
     [Symbol(@feathersjs/transport-commons/channels)]: {},
     [Symbol(@feathersjs/transport-commons/publishers)]:
      { [Symbol(@feathersjs/transport-commons/all-events)]: [Function] },
     [Symbol(@feathersjs/transport-commons/router)]:
      { _rootNode: [Node],
        _strictMode: undefined,
        _staticRoutesMap: [Object] } },
  method: 'create',
  path: 'transaksi-beli',
  data:
   { transbeliNo: 'trnsbeli-0003',
     penjual: 'ud jaya makmur',
     userId: '5d5a00351162b304b847162a',
     transbeliNote: null,
     totaljmlhBarang: 1,
     totalhargaBarang: 5000,
     transbeliDetail: [ [Object] ] },
  params:
   { authenticated: true,
     query: {},
     route: {},
     provider: 'rest',
     headers:
      { accept: 'application/json',
        'content-type': 'application/json',
        authorization:
         'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1ZDVhMDAzNTExNjJiMzA0Yjg0NzE2MmEiLCJpYXQiOjE1NjYxODQyMjYsImV4cCI6MTU2NjI3MDYyNiwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiZjc0MmEzMTctY2Q1Ni00MWMyLWEwOTAtOTlmNjNiODRjMmQyIn0._POaVTdTD7zaiKqF3RqnWO5C613XPsIVZ89QoUASG5Y',
        'user-agent': 'PostmanRuntime/7.15.2',
        host: 'localhost:4041',
        'accept-encoding': 'gzip, deflate',
        'content-length': '398',
        connection: 'keep-alive' },
     user:
      { _id: 5d5a00351162b304b847162a,
        email: 'iyutman2@gmail.com',
        password:
         '$2a$13$lvWL7V7uQb.2Sc1UL1QUxO0250c6o/ZZ0k1sl9/XVRr9yqmkbpfKG',
        createdAt: 2019-08-19T01:49:41.639Z,
        updatedAt: 2019-08-19T01:49:41.639Z,
        __v: 0 },
     payload: { userId: '5d5a00351162b304b847162a' } },
  result:
   { _id: 5d5a355dbc921417bca84854,
     transbeliNo: 'trnsbeli-0003',
     penjual: 'ud jaya makmur',
     userId: 5d5a00351162b304b847162a,
     transbeliNote: null,
     totaljmlhBarang: 1,
     totalhargaBarang: 5000,
     transbeliDetail: [ [Object] ],
     createdAt: 2019-08-19T05:36:29.145Z,
     updatedAt: 2019-08-19T05:36:29.145Z,
     __v: 0 } }