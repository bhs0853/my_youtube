const nestedComments = [
    {
        name : "User 1",
        text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        replies : [
            {
                name : "User 2",
                text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                replies : [
                    {
                        name : "User 3",
                        text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                        replies : []
                    },
                ]
            },
            {
                name : "User 4",
                text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                replies : []
            },
        ]
    },
    {
        name : "User 4",
        text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        replies : [
            {
                name : "User 1",
                text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                replies : [
                    {
                        name : "User 3",
                        text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                        replies : [
                            {
                                name : "User 2",
                                text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                                replies : []
                            },
                            {
                                name : "User 5",
                                text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                                replies : []
                            },
                        ]
                    },
                    {
                        name : "User 1",
                        text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                        replies : []
                    },
                ]
            },
        ]
    },
    {
        name : "User 3",
        text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        replies : []
    },
    {
        name : "User 4",
        text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        replies : []
    },
    {
        name : "User 2",
        text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        replies : [
            {
                name : "User 1",
                text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                replies : []
            },
            {
                name : "User 3",
                text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                replies : []
            },
        ]
    },
];
export default nestedComments;