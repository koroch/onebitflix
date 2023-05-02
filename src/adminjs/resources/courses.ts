import { ResourceOptions } from 'adminjs';

export const coursesResourceOptions: ResourceOptions = {
    navigation: 'Catálogo',
    editProperties: ['name', 'synopsis', 'uploadThumbnail', 'featured', 'categoryId'],
    filterProperties: ['name', 'synopsis', 'featured', 'categoryId', 'createdAt', 'updatedAt'],
    listProperties: ['id', 'name', 'featured', 'categoryId'],
    showProperties: ['id', 'name', 'synopsis', 'featured', 'categoryId', 'thumbnailUrl', 'categoryId', 'createdAt', 'updatedAt']
}