/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/home` | `/(tabs)/profile` | `/(tabs)/search` | `/(tabs)/video` | `/..\components\CustomSearchArea` | `/_sitemap` | `/home` | `/profile` | `/search` | `/video`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
