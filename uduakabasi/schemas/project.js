import {defineField, defineType} from 'sanity'


export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',

    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),

        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
            hotspot: true,
            },
         }),

        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }), 
    

        defineField({
            name: 'github',
            type: 'url',
            
        }),
        defineField({
            name: 'live',
            type: 'url',
            
        }),

    ]
})