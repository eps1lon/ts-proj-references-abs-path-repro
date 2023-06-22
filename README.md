# Declaration emit uses different import sources for same type

```bash
$ git clone https://github.com/eps1lon/ts-proj-references-abs-path-repro.git
$ yarn
$ yarn start
# types/dist/packages/hooks/useDialogNavigation.d.ts uses expected import source for `@klapp/navigation`
# types/dist/packages/hooks/useNavigationEvents.d.ts uses unexpected import source for `@klapp/navigation`
```
