import { ResourceWithOptions } from 'adminjs';
import { Category, Course } from '../../models';
import { categoryResourceOptions } from './category';
import { coursesResourceOptions } from './courses';

export const adminjsResources: ResourceWithOptions[] = [
    {
        resource: Category,
        options: categoryResourceOptions
    },
    {
        resource: Course,
        options: coursesResourceOptions
    }
]