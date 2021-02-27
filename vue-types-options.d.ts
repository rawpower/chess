import { Vue } from 'vue-property-decorator'

// ComponentOptions is declared in types/options.d.ts
declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    style?: any; // Allows the import of separate stylesheets in vue components
  }
}
