import { ComponentState } from '@/components/model/types/ComponentSchema';

export interface StateSchema {
	component: ComponentState;
}

export type StateSchemaKey = keyof StateSchema;
