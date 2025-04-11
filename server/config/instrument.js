// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"
// import {nodeProfilingIntegration} from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://f0dad101e43df8378fe8d9d973587e71@o4509133912735744.ingest.us.sentry.io/4509133921452032",
  integrations:[
    // nodeProfilingIntegration(),
    Sentry.mongoIntegration()
  ],
  // tracesSampleRate:1.0,
});

Sentry.profiler.startProfiler();