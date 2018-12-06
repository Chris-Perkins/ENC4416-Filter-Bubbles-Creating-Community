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
                postSubmitResponse: "Filter bubbles group users with content they agree with. Filter bubbles may be created by the platform developers or users. For example, Google uses filter bubbles to show you content you are interested in [1]. Online forum users can discourage specific content, and this can create filter bubbles as well.",
                sources: ["https://www.ted.com/talks/eli_pariser_beware_online_filter_bubbles"]
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
                postSubmitResponse: "The \"Incel\" community is an excellent example of what can happen when people are isolated in a self-made filter bubble. Incels are misogynistic men who blame women for their own toxic attitudes. This community has gradually radicalized itself due to its isolation, and it has developed increasingly violent opinions. For example, multiple mass shooters have been self-reported incels [1].",
                sources: ["https://www.vox.com/world/2018/4/25/17277496/incel-toronto-attack-alek-minassian"]
            },
            {
                prompt: "Do you believe isolation can cause increased political polarization?",
                answers: [
                    {
                        response: "No, isolation does not cause political polarization.",
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "I am not sure if isolation causes political polarization", 
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "Yes, isolation causes political polarization",
                        ideal: Store.fillIdeal
                    }
                ],
                postSubmitResponse: "When communities are isolated (by filter bubbles or human behavior itself), they may end up radicalizing [1]. Extreme voices are the loudest, and calls for self-reflection can often be drowned out [2]. Without intervention, development of toxic behavior may arise.",
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
                postSubmitResponse: "Political polarization is the distancing of people from political common ground. This happens when people isolate themselves from the other side-- causing a gradual drift towards the extremes [1]. The \"Unite the Right\" march in Fergusson which promoted fascism and anti-Semitism [2] and the violent Antifa protest at Tucker Carlson's home to try and silence him are some examples of these extremes on both sides of the spectrum [3]. It takes a fresh perspective to steer communities away from the extremes, and those perspectives can be hard to find when the people you interact with all agree with you.",
                sources: ["https://arxiv.org/pdf/1602.05642.pdf", "https://www.nytimes.com/2018/08/12/us/politics/charlottesville-va-protest-unite-the-right.html", "http://www.bostonherald.com/news/local_coverage/2018/11/antifa_protest_at_tucker_carlsons_home_stirs_outrage"]
            }
        ],
        /**
         * Questions that should be asked if the user is knowledgable and AGAINST filter bubbles.
         */
        knowledgableAntiQuestions: [
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
                postSubmitResponse: "Conspiracies develop and spread in isolated communities which cultivate external perspectives when in a lack of them. A few examples of popular conspiracy theories are that 9/11 was an inside job, the Earth is flat, the moon landing never happened, vaccines cause autism, Jews / lizard-people / the Illuminati run the world, etc. There's a lot of overlap in these communities; paranoid citizens isolate themselves together, bounce crazy conspiracies off each other, and kick out dissenting opinions. Eventually, you'll end up with a tiny community with a deranged world view. Filter bubbles partly contribute to this effect by showing people who already believe these sorts of things more content which agrees with them; this filtering keeps more reasonable voices from these communities [1].",
                sources: ["https://www.wired.com/2017/05/seth-rich-filter-bubble/"]
            },
            {
                prompt: "Have you seen any news articles which ended up being fake?",
                answers: [
                    {
                        response: "No, I am not aware of any news articles promoting fake information",
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "I have seen very few news articles promoting fake information", 
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "Yes, I have seen large amounts of news articles promoting fake information",
                        ideal: Store.fillIdeal
                    }
                ],
                postSubmitResponse: "Fake news masquerading as the truth can seriously damage communities. Filter bubbles are partly responsible as they will actively filter that news to the people most likely to believe and engage with it [1]. This same filtering could also easily keep any refutation of that fake news from the eyes which need to see it.",
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
                postSubmitResponse: "Political polarization is the distancing of people from political common ground. This happens when people isolate themselves from the other side-- causing a gradual drift towards the extremes [1]. The \"Unite the Right\" march in Fergusson which promoted fascism and anti-Semitism [2] and the violent Antifa protest at Tucker Carlson's home to try and silence him are some examples of these extremes on both sides of the spectrum [3]. It takes a fresh perspective to steer communities away from the extremes, and those perspectives can be hard to find when the people you interact with all agree with you.",
                sources: ["https://arxiv.org/pdf/1602.05642.pdf", "https://www.nytimes.com/2018/08/12/us/politics/charlottesville-va-protest-unite-the-right.html", "http://www.bostonherald.com/news/local_coverage/2018/11/antifa_protest_at_tucker_carlsons_home_stirs_outrage"]
            }
        ],
        /**
         * Questions that should be asked if the user is neutral about filter bubbles
         */
        neutralQuestions: [
            {
                prompt: "From how many places do you generally get your news?",
                answers: [
                    {
                        response: "1 or 2 different places",
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "3 or 4", 
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "5 or more sources",
                        ideal: Store.fillIdeal
                    }
                ],
                postSubmitResponse: "Most people get their news from a number of ideologically similar sources [1]. In other words, people like hearing opinions they agree with. It isn't ideal if your goal is to push everyone to the center. However, no amount of modifying algorithms will suddenly make people want to listen to those they disagree with; that is built into human nature.",
                sources: ["https://www.americanpressinstitute.org/publications/reports/survey-research/how-americans-get-news/"]
            },
            {
                prompt: "If Twitter or Facebook started showing you content you deemed offensive, would you take the time to read it?",
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
                postSubmitResponse: "Filter bubbles result from algorithms wanting to show people what they will engage with. Their elimination would seriously damage the retention of the people who use that platform. With that in mind, why would any for-profit company actively remove their algorithms which keep users engaged with their site? The solution to the extreme content which can sometimes show up on those platforms has so far been to ban offensive content rather than to adjust filter bubble algorithms.",
                sources: []
            },
            {
                prompt: "Are you a part of any niche online communities?\ne.g. a forum or newslist for coders, designers, plumbers, or any other profession",
                answers: [
                    {
                        response: "No, I am not a part of any niche communities",
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "Yes, I am a member of a few niche communities", 
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "Yes, I am a member of multiple niche communities",
                        ideal: Store.fillIdeal
                    }
                ],
                postSubmitResponse: "Filter bubbles are known to help foster particularly niche communities by showing people with similar interests similar things [1]. They also help people with that niche interest find each other. This builds communities. This can result in healthy communities (such as forums dedicated to loving animals) or to unhealthy communities (such as politically radicalizing forums).",
                sources: ["https://web.wpi.edu/Pubs/E-project/Available/E-project-011817-125559/unrestricted/MusicDiscoveryIQP_Report_12.21.16.pdf"]
            },
        ],
        /**
         * Questions that should be asked if someone is ignorant but supports filter bubbles.
         */
        ignorantProQuestions: [
            {
                prompt: "Have you ever happened upon racist, misogynistic, or homophobic content on a social platform?",
                answers: [
                    {
                        response: "No, I never see that kind of content",
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "Rarely if ever do I see that",
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "Yes, I see that sort of stuff occasionally", 
                        ideal: Store.fillIdeal
                    }
                ],
                postSubmitResponse: "Unfortunately, there are racist, misogynistic, and homophobic people on the internet, and those people produce content (comments, videos, articles, etc.). One of the best ways to avoid seeing that kind of content is to filter it. Social platforms using filter bubbles will not show you this content to you since you are not interested in it; that is the essence of a filter bubble.",
                sources: []
            },
            {
                prompt: "Are you a part of any niche online communities?\ne.g. a forum or newslist for coders, designers, plumbers, or any other profession",
                answers: [
                    {
                        response: "No, I am not a part of any niche communities",
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "Yes, I am a member of a few niche communities", 
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "Yes, I am a member of multiple niche communities",
                        ideal: Store.fillIdeal
                    }
                ],
                postSubmitResponse: "Filter bubbles are known to help foster particularly niche communities by showing people with similar interests similar things [1]. They also help people with that niche interest find each other. This builds communities. This can result in healthy communities (such as forums dedicated to loving animals) or to unhealthy communities (such as politically radicalizing forums).",
                sources: ["https://web.wpi.edu/Pubs/E-project/Available/E-project-011817-125559/unrestricted/MusicDiscoveryIQP_Report_12.21.16.pdf"]
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
                postSubmitResponse: "When it comes to changing minds, facts don't tend to suffice. In fact, overwhelming evidence can often be more intimidating than convincing [1]. Filter bubbles help people stay in a world which mostly agrees with them. This system allows people to still see some facts, but they will instead come from a perspective which they agree with instead of a perspective they strongly disagree with.",
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
                postSubmitResponse: "When it comes to changing opinions, people do it very slowly. In fact, being exposed to an opinion far from their own is not as convincing as an opinion closer to their own [1]. The solution to changing minds is to do it gradually, and this is why filter bubbles can be so helpful. Filter bubbles restrict the range of opinions people are exposed to, and this strategy allows users to gradually drift left or right rather than becoming horrified by the extremes of that topic. Luckily, there is a wide range of content which could get you between any two opinions in slow steps [2].",
                sources: ["https://heleo.com/facts-dont-change-peoples-minds-heres/16242/", "https://www.technologyreview.com/s/611807/this-is-what-filter-bubbles-actually-look-like/"]
            },
            {
                prompt: "From how many places do you generally get your news?",
                answers: [
                    {
                        response: "1 or 2 different places",
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "3 or 4", 
                        ideal: Store.fillIdeal
                    },
                    {
                        response: "5 or more sources",
                        ideal: Store.fillIdeal
                    }
                ],
                postSubmitResponse: "Most people get their news from a number of ideologically similar sources [1]. In other words, people like hearing opinions they agree with. It isn't ideal if your goal is to push everyone to the center. However, no amount of modifying algorithms will suddenly make people want to listen to those they disagree with; that is built into human nature.",
                sources: ["https://www.americanpressinstitute.org/publications/reports/survey-research/how-americans-get-news/"]
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
                postSubmitResponse: "Unfortunately, none of these solutions will work to curb the effects of filter bubbles. Answer (A) will cause people to become more set in their beliefs. This is because people will become more set in their own opinions when exposed to drastically differing opinions. (B) won't work either. If you show people content from random sources, there's a good chance you won't be showing them what they want to see. As an example, a liberal doesn't want to read an Info Wars article and a conservative doesn't care for Huffington Post articles. As such, the user will not feel engaged or accepted, and therefore will stop using your platform. Finally, (C) won't work because the \"center\" is impossible to objectively define. The center in US politics is very different from the center in Swedish politics or the center in Israeli politics. Also, individual people will have a different opinions about where those centers are.",
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
            case Store.filterBubbleKnowledgeLabels.knowledgable:
                switch (answers[1]) {
                    case Store.filterBubbleFeelingLabels.pro:
                        return Store.questions.knowledgableProQuestions;
                    case Store.filterBubbleFeelingLabels.neutral:
                        return Store.questions.neutralQuestions;
                    case Store.filterBubbleFeelingLabels.anti:
                        return Store.questions.knowledgableAntiQuestions;
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
