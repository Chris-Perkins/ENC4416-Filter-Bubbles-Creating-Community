import * as React from "react";
import { observable } from "mobx";

class Store {
    static filterBubbleKnowledgeLabels = {
        ignorant: 1,
        knowledgable: 2
    };
    static filterBubbleFeelingLabels = {
        pro: 1,
        neutral: 2,
        anti: 3
    };
    static fillIdeal = null;

    /**
     * All of the questions. All questions will follow the following format
     * 
     * ```
     * {
     *  prompt: "$Question",
     *  answers: [
     *      {
     *          response: "$Response",
     *          ideal: $SomeIdealBasedOnAnEnum.
     *      }
     *  ]
     * }
     * ```
     * 
     * For base questions:
     * The first question will use Store.filterBubbleKnowledgeLabels for its ideal values,
     * and the second question uses Store.filterBubbleFeelingLabels for its ideal values.
     * 
     * For all other questions:
     * The recorded ideal is a meaningless `null`
     */
    static questions = {
        baseQuestions: [
            {
                prompt: "How would you describe your understanding of 'filter bubbles'?",
                answers: [
                    {
                        response: "I haven't heard of them or know very little",
                        ideal: Store.filterBubbleKnowledgeLabels.ignorant
                    }, 
                    {  
                        response: "I know a lot about filter bubbles",
                        ideal: Store.filterBubbleKnowledgeLabels.knowledgable
                    }
                ],
            },
            {
                prompt: "How do you feel about the filtering of content on online platforms?",
                answers: [
                    {
                        response: "Filtering content has mainly drawbacks",
                        ideal: Store.filterBubbleFeelingLabels.pro
                    },
                    {
                        response: "Filtering content has both positives and negatives", 
                        ideal: Store.filterBubbleFeelingLabels.neutral
                    },
                    {
                        response: "Filtering content is mostly a good thing",
                        ideal: Store.filterBubbleFeelingLabels.anti
                    }
                ]
            }
        ],
        ignorantAntiQuestions: [
            {
                prompt: "How much do you know about the \"Incel\" community?",
                answers: [
                    {
                        response: "I have not heard of them",
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "I have heard of them, but I do not know much", 
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "I know about them",
                        ideal: Store.fillIdeal
                    }
                ]
            },
            {
                prompt: "Have you ever been to 4chan's /pol board?",
                answers: [
                    {
                        response: "I do not know what that is",
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "I know what /pol is, but I have not been there", 
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "Yes, I have been there",
                        ideal: Store.fillIdeal
                    }
                ]
            },
            {
                prompt: "Have you noticed increasing political polarization throughout the world?",
                answers: [
                    {
                        response: "Not at all",
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "I have seen increasing political polarization in some places", 
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "Increasing political polarization is everywhere",
                        ideal: Store.fillIdeal
                    }
                ]
            }
        ],
        knowledgeableAntiQuestions: [
            {
                prompt: "How many conspiracy theories have you seen promoted online?",
                answers: [
                    {
                        response: "I have not seen any conspiracy theories online",
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "I have seen very few conspiracy theories online", 
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "I have seen substantial amounts of conspiracy theories online",
                        ideal: Store.fillIdeal
                    }
                ]
            },
            {
                prompt: "Have you seen any news articles which ended up being fake?",
                answers: [
                    {
                        response: "I am not aware of any news articles promoting fake information",
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "I have seen very few news articles promoting fake information", 
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "I have seen large amounts of news articles promoting fake information",
                        ideal: Store.fillIdeal
                    }
                ]
            },
            {
                prompt: "Have you noticed increasing political polarization throughout the world?",
                answers: [
                    {
                        response: "Not at all",
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "I have seen increasing political polarization in some places", 
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "Increasing political polarization is everywhere",
                        ideal: Store.fillIdeal
                    }
                ]
            }
        ],
        neutralQuestions: [
            {
                prompt: "How many diferent news sources do you regularly check and read?",
                answers: [
                    {
                        response: "I read 1 or 2 different news sources",
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "I read 3 or 4 different news sources", 
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "I read 5 or more different news sources",
                        ideal: Store.fillIdeal
                    }
                ]
            },
            {
                prompt: "If Twitter or Facebook started showed you content you deemed offensive, would you take the time to read it?",
                answers: [
                    {
                        response: "Absolutely not",
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "I might", 
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "I definitely would",
                        ideal: Store.fillIdeal
                    }
                ]
            },
            {
                prompt: "Are you a part of any niche online communities?\ne.g. a forum for coders, designers, or plumbers",
                answers: [
                    {
                        response: "I am not a part of any niche communities",
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "I am a member of a few niche communities", 
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "I am a member of multiple niche communities",
                        ideal: Store.fillIdeal
                    }
                ]
            }
        ],
        ignorantProQuestions: [
            {
                prompt: "Are you a part of any niche online communities?\ne.g. a forum for coders, designers, or plumbers",
                answers: [
                    {
                        response: "I am not a part of any niche communities",
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "I am a member of a few niche communities", 
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "I am a member of multiple niche communities",
                        ideal: Store.fillIdeal
                    }
                ]
            },
            {
                prompt: "Have you ever happened upon racist, misogonistic or homophobic content on a social platform?",
                answers: [
                    {
                        response: "I never see that kind of content",
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "I see that sort of stuff occasionally",
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "Rarely if ever do I see that", 
                        ideal: Store.fillIdeal
                    }
                ]
            },
            {
                prompt: "Do you often check news sites which don't share your opinions?",
                answers: [
                    {
                        response: "Never or almost never",
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "Occasionally", 
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "All the time",
                        ideal: Store.fillIdeal
                    }
                ]
            }
        ],
        knowledgableProQuestions: [
            {
                prompt: "Have you ever gradually changed your opinion on a topic?",
                answers: [
                    {
                        response: "Never",
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "It's happened sometimes", 
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "All the time",
                        ideal: Store.fillIdeal
                    }
                ]
            },
            {
                prompt: "How many diferent news sources do you regularly check and read?",
                answers: [
                    {
                        response: "I read 1 or 2 different news sources",
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "I read 3 or 4 different news sources", 
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "I read 5 or more different news sources",
                        ideal: Store.fillIdeal
                    }
                ]
            },
            {
                prompt: "If you wanted to reduce the effects of filter bubbles, how would you do it?",
                answers: [
                    {
                        response: "Occasionally show people content which you know they will disagree with",
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "Show people completely random content", 
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "Show people center-leaning content",
                        ideal: Store.fillIdeal
                    }
                ]
            }
        ]
    };

    /**
     * Gets the next question to be asked given the current quiz choices.
     */
    getQuestion() {
        return this.getQuestionForAnswerChoices(this.currentQuizChoices);
    }

    /**
     * Retrieves the current question that should be given to the user. The first two choices
     * are assumed to be answers to the first two base questions.
     * 
     * @param answers The current answers as indices to the provided questions.
     */
    getQuestionForAnswerChoices(answers) {
        if (answers.length < 2) {
            return Store.questions.baseQuestions[answers.length];
        }

        switch (answers[0]) {
            case Store.filterBubbleKnowledgeLabels.ignorant:
                switch (answers[1]) {
                    case Store.filterBubbleFeelingLabels.pro:
                        return Store.questions.ignorantProQuestions[answers.length - 2];
                    case Store.filterBubbleFeelingLabels.neutral:
                        return Store.questions.neutralQuestions[answers.length - 2];
                    case Store.filterBubbleFeelingLabels.anti:
                        return Store.questions.ignorantAntiQuestions[answers.length - 2];
                    default:
                        return Store.questions.neutralQuestions[answers.length - 2];
                }
            case Store.filterBubbleKnowledgeLabels.ignorant:
                switch (answers[1]) {
                    case Store.filterBubbleFeelingLabels.pro:
                        return Store.questions.knowledgableProQuestions[answers.length - 2];
                    case Store.filterBubbleFeelingLabels.neutral:
                        return Store.questions.neutralQuestions[answers.length - 2];
                    case Store.filterBubbleFeelingLabels.anti:
                        return Store.questions.ignorantAntiQuestions[answers.length - 2];
                    default:
                        return Store.questions.neutralQuestions[answers.length - 2];
                }
            default:
                return Store.questions.neutralQuestions[answers.length - 2];
        }
    }

    @observable currentQuizChoices = [];
}

export const store = new Store();