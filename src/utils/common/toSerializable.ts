export const toSerializable = <T>(obj: unknown): T => JSON.parse(JSON.stringify(obj));
