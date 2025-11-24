# React-native Template
Modern react-native template using feature-domain-driven architecture.

- #### Framework & Routing
        - Expo
        - Expo Router 

- #### UI / Design
        - Tamagui

- #### State & Data
        - React Query
        - Zustand
        - MMKV

- #### Forms and Validation
        - React Hook Form
        - Zod

- #### Internationalization
        - i18next

- #### Network & Mocks
        - MSW

- #### Testing
        - Jest

# Guide

## Api
### I want to add a new call in a page
        - Add a new contract in your feature domain: "src/features/{domain}/api/{domain}.contract.ts"
        - Implement the contract concretely in "src/features/{domain}/api/{domain}.api.ts"

        - Implement the mocks in "src/features/{domain}/api/{domain}.mock.ts" and the specific mocks in "src/features/{domain}/api/mocks/{call_name}.ts"
        - Register the mocks with an new import in the mocks registry at: "src/api/mock/mocks.ts"

        - Add the react query capable hook in "src/features/{domain}/hooks/use{call_name}.ts"
        - Add a call to the hook in your page e.g. "const { data, isLoading, error } = useProducts();"