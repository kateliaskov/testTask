import { createAction, props } from "@ngrx/store";

export const addToCart = createAction('[Item] Add To Cart', props<{item: any}>())
export const removeFromCart = createAction('[Item] Add To Cart', props<{itemId: number}>())