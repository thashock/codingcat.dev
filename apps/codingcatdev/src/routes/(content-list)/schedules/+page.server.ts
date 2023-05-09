import { getContentTypeDirectory, listContent } from '$lib/server/content';
import { ContentType, type Content } from '$lib/types';

const contentType = ContentType.schedule;

export const load = async () => {
	return {
		contentType,
		...await listContent<Content>({
			contentItems: await getContentTypeDirectory<Content>(contentType)
		})
	};
};
