import { createAction, props } from "@ngrx/store";

export const addToCart = createAction('[Item] Add To Cart', props<{item: any}>())
export const removeFromCart = createAction('[Item] Remove From Cart', props<{itemId: number}>())
export const editCart = createAction('[Item] Edit Cart', props<{items: any}>())