import * as UserActionCreators from "./users"
import * as TodosActionCreators from "./todos"

export const ActionCreators = {
  ...UserActionCreators,
  ...TodosActionCreators
}