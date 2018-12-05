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
     *          ideal: $SomeIdealBasedOnAnEnum
     *      },
     *   postSubmitResponse: "$Response"
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
        /**
         * The basic questions that should be asked upon startup.
         */
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
                postSubmitResponse: null,
                sources: []
            },
            {
                prompt: "How do you feel about the filtering of content on online platforms?",
                answers: [
                    {
                        response: "Filtering content has mainly drawbacks",
                        ideal: Store.filterBubbleFeelingLabels.anti
                    },
                    {
                        response: "Filtering content has both positives and negatives", 
                        ideal: Store.filterBubbleFeelingLabels.neutral
                    },
                    {
                        response: "Filtering content is mostly a good thing",
                        ideal: Store.filterBubbleFeelingLabels.pro
                    }
                ],
                postSubmitResponse: null,
                sources: []
            }
        ],
        /**
         * Questions that should be asked if the user is ignorant of filter bubbles and is against them
         */
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
                ],
                postSubmitResponse: "The \"Incel\" community is an excellent example of what can happen when people are isolated from others by being put into a bubble. Incels are misogonistic men who for whatever reason don’t have any luck with female relationships. Their response to this is to blame females for being too shallow rather than looking inwards at their extremely unhealthy attitudes which drive everyone away. This community has gradually radicalized itself due to its isolation and developed increasingly extreme opinions. Multiple mass shooters have been self-reported incels [1].",
                sources: ["https://www.vox.com/world/2018/4/25/17277496/incel-toronto-attack-alek-minassian"]
            },
            {
                prompt: "Have you ever been to 4chan's /pol/ board?",
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
                ],
                postSubmitResponse: "When tiny communities are isolated in bubbles (be it be by filter bubbles or human behavior itself), that community may end up radicalizing [1]. Extreme voices are the loudest and calls for self-reflection can often be drowned out [2]. Without outside intervention, you may end up with the development of all kinds of nasty behavior the internet is famous for.",
                sources: ["https://arxiv.org/pdf/1602.05642.pdf", "https://www.technologyreview.com/s/611807/this-is-what-filter-bubbles-actually-look-like/"]
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
                ],
                postSubmitResponse: "Political polarization is the distancing of people from political common ground. It happens when people isolate themselves from the other side causing a gradual drift towards the extremes of the political spectrum [1]. At the extremes, the \"Unite the Right\" march in Fergusson to promote facism and anti-semitism [2] and Antifa promoting violence and perpetuating violence against republican voices [3]. It takes a fresh perspective to steer communities away from the extremes and those perspectives can be hard to find when the people you interact with all agree with you.",
                sources: ["[https://arxiv.org/pdf/1602.05642.pdf", "https://www.nytimes.com/2018/08/12/us/politics/charlottesville-va-protest-unite-the-right.html", "http://www.bostonherald.com/news/local_coverage/2018/11/antifa_protest_at_tucker_carlsons_home_stirs_outrage"]
            }
        ],
        /**
         * Questions that should be asked if the user is knowledgable and AGAINST filter bubbles.
         */
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
                ],
                postSubmitResponse: "Conspiracies develop and spread in isolated communities which, lacking external perspectives, cultivate them. A few examples of the more absurd conspiracy theories are: 9/11 was an inside job, the Earth is flat, the moon landing never happened, vaccines cause autism, Jews / lizard-people / the Illuminati run the world, etc. There's a lot of overlap in these communities; paranoid people isolate themselves together and bounce crazy conspiracies off each other and kick out everyone who doesn't agree. Eventually, you end up with a tiny community with a derranged world view. Filter bubbles partly contribute to this effect by showing people who already believe these sorts of things more content which agrees with them and keeping dissenting opinions from them [1].",
                sources: ["https://www.wired.com/2017/05/seth-rich-filter-bubble/"]
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
                ],
                postSubmitResponse: "Fake news masquerading as truthful can seriosuly damage communities. Filter bubbles are partly responsible as they will actively filter that news to people most likely to believe and engage with it [1]. This same filtering could also easily keep any refuation of that fake news from the eyes which need to see it.",
                sources: ["https://blog.dataiku.com/fake-news-and-filter-bubbles"]
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
                ],
                postSubmitResponse: "Political polarization is the distancing of people from political common ground. It happens when people isolate themselves from the other side causing a gradual drift towards the extremes of the political spectrum [1]. At the extremes, the \"Unite the Right\" march in Fergusson to promote facism and anti-semetism [2] and Antifa promoting violence and perpetuating violence against republican voices [3]. It takes a fresh perspective to steer communities away from the extremes and those perspectives can be hard to find when the people you interact with all agree with you.",
                sources: ["https://arxiv.org/pdf/1602.05642.pdf", "https://www.nytimes.com/2018/08/12/us/politics/charlottesville-va-protest-unite-the-right.html", "http://www.bostonherald.com/news/local_coverage/2018/11/antifa_protest_at_tucker_carlsons_home_stirs_outrage"]
            }
        ],
        /**
         * Questions that should be asked if the user is neutral about filter bubbles
         */
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
                ],
                postSubmitResponse: "Most people get their news from a number of ideologically similar sources [1]. In other words, people like hearing opinions they agree with. It isn't ideal if your goal is to push everyone to the center, but no amount of changing algorithms will sudenly make people want to hear people they disagree with; that is built into human nature.",
                sources: ["https://www.americanpressinstitute.org/publications/reports/survey-research/how-americans-get-news/"]
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
                ],
                postSubmitResponse: "Filter bubbles result from algorithms wanting to show people what they will engage with. Their elimination would seriously damage the retention of the people who use that platform. With that in mind, why would any company actively remove their algorithms which keep people engaged and seeing what they want to see? The solution to the extreme content which can sometimes show up on those platforms has so far been to ban that content rather than adjust algorithms to keep it away from people who don't like it [1]. (WHERE THE HECK IS THE SOURCE? AVI, YOU DIDN'T INCLUDE IT IN THE NOTES)",
                sources: []
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
                ],
                postSubmitResponse: "Filter bubbles are known to help foster particularly niche communities by showing people with similar interests similar things [1]. They also help people with that niche interest find eachother, building a community. This can result in healthy communities like the various subreddits dedicated to loving animals or to unhealthy communities like a few political subreddits (which tend to become extreme quickly).",
                sources: ["https://web.wpi.edu/Pubs/E-project/Available/E-project-011817-125559/unrestricted/MusicDiscoveryIQP_Report_12.21.16.pdf"]
            }
        ],
        /**
         * Questions that should be asked if someone is ignorant, but supports filter bubbles.
         */
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
                ],
                postSubmitResponse: "Filter bubbles are known to help foster particularly niche communities by showing people with similar interests similar things [1]. They also help people with that niche interest find each other, building a community. On Youtube, for example, videos are organized and recommended to people based on similar how similar those videos are and how often someone would watch one video after another. This filtering helped create all the communities on Youtube.",
                sources: ["https://web.wpi.edu/Pubs/E-project/Available/E-project-011817-125559/unrestricted/MusicDiscoveryIQP_Report_12.21.16.pdf"]
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
                ],
                postSubmitResponse: "Unfortunately, there are racist, misogonistic and homophobic people on the internet and those people produce content all the time (think comments, videos, articles, etc.). One of the best ways to avoid seeing that kind of content is to let it be filtered out. Social platforms using filter bubbles will realize that you don't want to see that kind of content and so won't show it to you; that is the essence of a filter bubble.",
                sources: []
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
                ],
                postSubmitResponse: "When it comes to changing minds, facts don't tend to suffice. In fact, overwhelming evidence can often be more intimidating than convincing [1]. Filter bubbles help people stay in a world which mostly agrees with them. There will also be the occasional farther left or right opinions. This system allows people to still see some facts but from a perspective which they agree with instead of from a perspective they hate (and then ignoring the whole argument).",
                sources: ["https://bigthink.com/think-tank/the-backfire-effect-why-facts-dont-win-arguments"]
            }
        ],
        /**
         * Questions that should be asked if someone is knowledgeable and supportive of filter bubbles.
         */
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
                ],
                postSubmitResponse: "When it comes to changing opinions, people do it very slowly. In fact, being exposed to an opinion far from their own will is not as convincing as an opinion close to their own [1]. The solution to changing minds is to do it slowly which is why filter bubbles can be so helpful. They restrict the range of opinions people are exposed to allowing users to gradually drift left or right rather than become horrified by the extremes of that topic. Luckily there is a wide range of content which could get you between any 2 opinions in slow steps [2].",
                sources: ["[https://heleo.com/facts-dont-change-peoples-minds-heres/16242/", "https://www.technologyreview.com/s/611807/this-is-what-filter-bubbles-actually-look-like/"]
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
                ],
                postSubmitResponse: "Most people get their news from 5 or more sources [1]. Additionally, because most news sources are biased in some way, people prefer to get their news from a source which supports their core values [2]. Filter bubbles help people find a variety of news sources which they can agree with instead of having to search tons of articles. Additionally, as long as people make use of many sources, the chances that they can be fooled by fake news are small.",
                sources: ["https://www.americanpressinstitute.org/publications/reports/survey-research/how-americans-get-news/", "https://policyreview.info/articles/analysis/should-we-worry-about-filter-bubbles"]
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
                ],
                postSubmitResponse: "Unfortunately, none of these solutions will work to curb the effects of filter bubbles. Answer (A) will cause people to become more set in their beliefs because when opposed to drastically differing opinions, people will become more set in their own. (B) won't work because if you show people content from random sources, there's a good chance you won't be showing them what they want to see. As an example, a liberal doesn't want to read an Info Wars article and a conservative doesn't care for Huffington Post articles. (C) won't work because the \"center\" is impossible to objectively define. The center in US politics is very diferent from the center in Swedish politics or the center in Israeli politics. Also everyone will have a diferent opinion about where those centers even are.",
                sources: []
            }
        ]
    };

    /**
     * Returns whether or not there is a "next" question after the current question that would be returned from `getQuestion`.
     */
    hasNextQuestion() {
        // user has not answered all base questions; there is more.
        // subtract one as the user has yet to answer this question.
        // note that this would cause an error if the next section is EMPTY. :O
        // we assume that base has at least one question. :)
        if (this.currentQuizChoices.length < Store.questions.baseQuestions.length) {
            return true;
        }

        // subtract one from the end because the user ALWAYS hasn't answered one question.
        return this.currentQuizChoices.length - Store.questions.baseQuestions.length < this.getQuestionSection(this.currentQuizChoices).length - 1;
    }

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
        if (answers.length < Store.questions.baseQuestions.length) {
            return this.getQuestionSection(answers)[answers.length];
        }
        return this.getQuestionSection(answers)[answers.length - Store.questions.baseQuestions.length];
    }

    /**
     * Gets the section where questions should be pulled from.
     * 
     * If there are not enough answers to fill out the base questions, then return `baseQuestions`.
     * Otherwise, the following flowchart is followed:
     * Pro:
     *  * Knowledgeable:
     *      * return knowledgeablePro
     *  * Ignorant:
     *      * return ignorantPro
     * Neutral:
     *  * return neutral
     * Anti:
     *  * Knowledgeable:
     *      * return knowledgeableAnti
     *  * Ignorant:
     *      * return ignorantAnti
     * 
     * @param answers The answers to all currently answered questions
     */
    getQuestionSection(answers) {
        if (answers.length < Store.questions.baseQuestions.length) {
            return Store.questions.baseQuestions;
        }

        switch (answers[0]) {
            case Store.filterBubbleKnowledgeLabels.ignorant:
                switch (answers[1]) {
                    case Store.filterBubbleFeelingLabels.pro:
                        return Store.questions.ignorantProQuestions;
                    case Store.filterBubbleFeelingLabels.neutral:
                        return Store.questions.neutralQuestions;
                    case Store.filterBubbleFeelingLabels.anti:
                        return Store.questions.ignorantAntiQuestions;
                    default:
                        return Store.questions.neutralQuestions;
                }
            case Store.filterBubbleKnowledgeLabels.ignorant:
                switch (answers[1]) {
                    case Store.filterBubbleFeelingLabels.pro:
                        return Store.questions.knowledgableProQuestions;
                    case Store.filterBubbleFeelingLabels.neutral:
                        return Store.questions.neutralQuestions;
                    case Store.filterBubbleFeelingLabels.anti:
                        return Store.questions.ignorantAntiQuestions;
                    default:
                        return Store.questions.neutralQuestions;
                }
            default:
                return Store.questions.neutralQuestions;
        }
    }

    @observable currentQuizChoices = [];
}

export const store = new Store();