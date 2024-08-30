import { generateCssRules } from './functions'
import {border_radius, margins, paddings, fonts, alignment, display, flexDirections, alignContent, justifyContent, defaultBackgroundSettings, defaultBackgroundImageSettings} from './settings'

//SM, MD, LG: Are the available devices
export const sections_data = [
    {
        name: 'Header 1',
        component: 'header_1',
        category: ['headers'],
        settings: {
            container: [
                {
                    type: 'media',
                    path: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply',
                    title: '',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            headline: [
                {
                    type: 'text',
                    content: 'Work with us',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            paragraph: [
                {
                    type: 'text',
                    content: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            link: [
                {
                    type: 'text',
                    content: 'Open roles →',
                    path: '#',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            state: [
                {
                    type: 'state',
                    elements: {
                        container: {
                            type: 'container',
                            settings: {
                                sm: generateCssRules({}),
                                md: generateCssRules({}),
                                lg: generateCssRules({}),
                            }
                        },
                        number: [
                            {
                                type: 'text',
                                content: '12',
                                settings: {
                                    sm: generateCssRules({}),
                                    md: generateCssRules({}),
                                    lg: generateCssRules({}),
                                }
                            }
                        ],
                        text: [
                            {
                                type: 'text',
                                content: 'Offices worldwide',
                                settings: {
                                    sm: generateCssRules({}),
                                    md: generateCssRules({}),
                                    lg: generateCssRules({}),
                                }
                            }
                        ]
                    }
                }
            ]
        }
    },
    {
        name: 'Header 2',
        component: 'header_2',
        category: ['headers'],
        settings: {
            container: [
                {
                    type: 'container',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            headline: [
                {
                    type: 'text',
                    content: 'Support center',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            subheadline: [
                {
                    type: 'text',
                    content: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
        }
    },
    {
        name: 'CTA 1',
        component: 'cta_1',
        category: ['CTAs'],
        settings: {
            container: [
                {
                    type: 'container',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            headline: [
                {
                    type: 'text',
                    content: 'Boost your productivity. Start using our app today.',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],


            subheadline: [
                {
                    type: 'text',
                    content: 'Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            cta1: [
                {
                    type: 'text',
                    content: 'Get started',
                    path: '#',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            cta2: [
                {
                    type: 'text',
                    content: 'Learn more →',
                    path: '#',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            image: [
                {
                    type: 'media',
                    path: 'https://tailwindui.com/img/component-images/dark-project-app-screenshot.png',
                    title: 'BG',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ]
        }
    },

    {
        name: 'CTA 2',
        component: 'cta_2',
        category: ['CTAs'],
        settings: {
            container: [
                {
                    type: 'container',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            headline: [
                {
                    type: 'text',
                    content: 'Boost your productivity today.',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            subheadline: [
                {
                    type: 'text',
                    content: 'Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            button1: [
                {
                    type: 'text',
                    content: 'Get started',
                    path: '#',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            button2: [
                {
                    type: 'text',
                    content: 'Learn more →',
                    path: '#',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
          
        }
    },
    {
        name: 'CTA 3',
        component: 'cta_3',
        category: ['CTAs'],
        settings: {
            container: [
                {
                    type: 'container',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            image: [
                {
                    type: 'media',
                    path: 'https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply',
                    title:'bg1',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],

            subtitle: [
                {
                    type: 'text',
                    content: 'Award winning support',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            title: [
                {
                    type: 'text',
                    content: 'We’re here to help',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            paragraphe: [
                {
                    type: 'text',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            button1: [
                {
                    type: 'text',
                    content: 'Visit the help center',
                    path: '#',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
          
        }
    },
    {
        name: 'CTA 4',
        component: 'cta_4',
        category: ['CTAs'],
        settings: {
            container: [
                {
                    type: 'container',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            image: [
                {
                    type: 'media',
                    path: 'https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
                    title:'bg4',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],

            title: [
                {
                    type: 'text',
                    content: 'Join our team',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            subtitle: [
                {
                    type: 'text',
                    content: 'Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            text1: [
                {
                    type: 'text',
                    content: '<svg class="h-7 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg> Competitive salaries',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
          
          
        
          
            button1: [
                {
                    type: 'text',
                    content: ' See our job postings → ',
                    path: '#',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
          
        }
    },
    {
        name: 'CTA 5',
        component: 'cta_5',
        category: ['CTAs'],
        settings: {
            container: [
                {
                    type: 'container',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
         

            title: [
                {
                    type: 'text',
                    content: 'Our people',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            paragraphe1: [
                {
                    type: 'text',
                    content: 'Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus ut molestiae velit error quod. Excepturi quidem expedita molestias quas',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            paragraphe2: [
                {
                    type: 'text',
                    content: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat. Quasi aperiam sit non sit neque reprehenderit.',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
           button1: [
                {
                    type: 'text',
                    content: 'Join our team ',
                    path:'#',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            image1: [
                {
                    type: 'media',
                    path: 'https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80',
                    title:'bg1',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            image2: [
                {
                    type: 'media',
                    path: 'https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80 ',
                    title:'bg2',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            image3: [
                {
                    media: 'media',
                    path: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80 ',
                    title:'bg3',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            image4: [
                {
                    type: 'media',
                    path: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80 ',
                    title:'bg4',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
          
          
        }
    },
    {
        name: 'support',
        component: 'support',
        category: ['Support'],
        settings: {
            container: [
                {
                    type: 'container',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
         

            image1: [
                {
                    type: 'media',
                    path: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply',
                    title:'BG1',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            title: [
                {
                    type: 'text',
                    content: 'Support center',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            paragraphe1: [
                {
                    type: 'text',
                    content: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
           svg1: [
                {
                    type: 'text',
                    content: '<path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd" />',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            title1: [
                {
                    type: 'text',
                    content: 'Sales',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            title2: [
                {
                    type: 'text',
                    content: 'Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur.',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            svg2: [
                {
                    type: 'text',
                    content: '<path fill-rule="evenodd" d="M7.171 4.146l1.947 2.466a3.514 3.514 0 011.764 0l1.947-2.466a6.52 6.52 0 00-5.658 0zm8.683 3.025l-2.466 1.947c.15.578.15 1.186 0 1.764l2.466 1.947a6.52 6.52 0 000-5.658zm-3.025 8.683l-1.947-2.466c-.578.15-1.186.15-1.764 0l-1.947 2.466a6.52 6.52 0 005.658 0zM4.146 12.83l2.466-1.947a3.514 3.514 0 010-1.764L4.146 7.171a6.52 6.52 0 000 5.658zM5.63 3.297a8.01 8.01 0 018.738 0 8.031 8.031 0 012.334 2.334 8.01 8.01 0 010 8.738 8.033 8.033 0 01-2.334 2.334 8.01 8.01 0 01-8.738 0 8.032 8.032 0 01-2.334-2.334 8.01 8.01 0 010-8.738A8.03 8.03 0 015.63 3.297zm5.198 4.882a2.008 2.008 0 00-2.243.407 1.994 1.994 0 00-.407 2.243 1.993 1.993 0 00.992.992 2.008 2.008 0 002.243-.407c.176-.175.31-.374.407-.585a2.008 2.008 0 00-.407-2.243 1.993 1.993 0 00-.585-.407z" clip-rule="evenodd" />',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            title3: [
                {
                    type: 'text',
                    content: 'Technical Support ',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            title4: [
                {
                    type: 'text',
                    content: 'Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam. ',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            svg3: [
                {
                    type: 'text',
                    content: '   <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h9A1.5 1.5 0 0114 3.5v11.75A2.75 2.75 0 0016.75 18h-12A2.75 2.75 0 012 15.25V3.5zm3.75 7a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zm0 3a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zM5 5.75A.75.75 0 015.75 5h4.5a.75.75 0 01.75.75v2.5a.75.75 0 01-.75.75h-4.5A.75.75 0 015 8.25v-2.5z" clip-rule="evenodd" /><path d="M16.5 6.5h-1v8.75a1.25 1.25 0 102.5 0V8a1.5 1.5 0 00-1.5-1.5z" /> ',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            title5: [
                {
                    type: 'text',
                    content: ' Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit. ',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
          
          
        }
    },
    {
        name: 'work',
        component: 'work',
        category: ['Work'],
        settings: {
            container: [
                {
                    type: 'container',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
         

            image1: [
                {
                    type: 'media',
                    path: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply',
                    title:'bg1',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            title: [
                {
                    type: 'text',
                    content: 'Work with us',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            subtitle: [
                {
                    type: 'text',
                    content: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
           step1: [
                {
                    type: 'text',
                    content: 'Open roles <span aria-hidden="true">&rarr;</span>',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            step2: [
                {
                    type: 'text',
                    content: 'Internship program <span aria-hidden="true">&rarr;</span>',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            step3: [
                {
                    type: 'text',
                    content: 'Our values <span aria-hidden="true">&rarr;</span>',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            step4: [
                {
                    type: 'text',
                    content: 'Meet our leadership <span aria-hidden="true">&rarr;</span>',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            offer1: [
                {
                    type: 'text',
                    content: 'Offices worldwide ',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
           number1: [
                {
                    type: 'text',
                    content: '12 ',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            offer2: [
                {
                    type: 'text',
                    content: ' Full-time colleagues ',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            number2: [
                {
                    type: 'text',
                    content: ' 300+ ',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            offer3: [
                {
                    type: 'text',
                    content: ' Hours per week ',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            number3: [
                {
                    type: 'text',
                    content: ' 40 ',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            offer4: [
                {
                    type: 'text',
                    content: ' Paid time off ',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
            number4: [
                {
                    type: 'text',
                    content: ' Unlimited ',
                    settings: {
                        sm: generateCssRules({}),
                        md: generateCssRules({}),
                        lg: generateCssRules({}),
                    }
                }
            ],
          
          
        }
    },

]