import { normalize, schema } from "normalizr";
/* 
const initialState = {
    portfolioProjects: [
        {
            navbarItemAll: [
                {
                    name: 'project one',
                },
            ],
        },
    ],
} */

/* 

// Define a users schema
const user = new schema.Entity('users');

// Define your comments schema
const comment = new schema.Entity('comments', {
  commenter: user
});

// Define your article
const article = new schema.Entity('articles', {
  author: user,
  comments: [comment]
}); */

const initialState = {
    "id" : 12345,
    "project": {
        "id": "1_",
        "nameOfProject": "projectOne",
    }
}

const project = new schema.Entity('project')

const projects = new schema.Entity('projects_', {
    newProject: [project]
})

const normalizedState = normalize(initialState, projects)

export default function projectsReducer(state = normalizedState, reducer) {
    return state
}

/* 
projectsReducer: {
    entities: {
      projects: {
        '12345': {
          id: 12345,
          project: {
            id: '1_',
            nameOfProject: 'projectOne'
          }
        }
      }
    },
    result: 12345
  }
}
*/