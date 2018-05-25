<template>
    <div class="questionnaire">
        <div class="questionnaire-info">
            <div class="questionnaire-name">
                {{ questionnaireName }}(共{{ questionCount }}道题)
            </div>
        </div>
        <div class="question-list">
            <div class="section-item" v-for="(section, sectionIndex) in sections" :key="sectionIndex">
                <div class="section-name">
                    {{ section.sectionName }}
                </div>
                <div class="question-item" v-for="(question, questionIndex) in section.questions" :key="questionIndex">
                    <div class="question-header">
                        题目序号: {{ question.index }}
                        <br> 跳转下一题: {{ question.toIndex }}
                    </div>
                    <div class="question-type">
                        类型:
                        <span v-if="question.questionType === 'MULTI_CHOICE'">【多选题】</span>
                        <span v-else-if="question.questionType === 'SINGLE_CHOICE'">【单选题】</span>
                        <span v-else-if="question.questionType === 'BLANKS'">填空题</span>
                    </div>
                    <div class="question-name">
                        题目:{{ question.questionName }}
                    </div>
                    <div class="question-info">
                        <template v-for="(questionDesc, questionDescIndex) in question.descInfo" v-if="questionDesc.title || questionDesc.desc">
                            (
                            <span :key="questionDescIndex" v-if="questionDesc.title">{{ questionDesc.title }}: </span>
                            <span :key="questionDescIndex" v-if="questionDesc.desc">{{ questionDesc.desc }})</span>
                        </template>
                    </div>
                    <div class="question-option" v-if="question.questionType === 'MULTI_CHOICE' || question.questionType === 'SINGLE_CHOICE'">
                        选项:
                        <div class="option-item" v-for="(option, optionIndex) in question.options" :key="optionIndex">
                            {{ option.optionTag }}、{{ option.optionName }}
                            <template v-for="(desc, descIndex) in option.descInfo" v-if="desc.title || desc.desc">
                                (
                                <span :key="descIndex" v-if="desc.title">{{ desc.title }}: </span>
                                <span :key="descIndex" v-if="desc.desc">{{ desc.desc }})</span>
                            </template>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <span v-if="option.toIndex">
                                {{ option.toIndex }}
                            </span>
                        </div>
                    </div>
                </div>
                <!-- <div class="question-title">
                    1. {{ currentQuestion.questionName }}
                </div> -->
                <!-- <div class="question-option">
                    <div class="question-option-single"></div>
                    <div class="question-option-multiple">
                        {{ currentQuestion.options }}
                    </div>
                </div> -->
            </div>
        </div>
        <!-- <div class="question-button">
            <button @click="previousQuestion">上一题</button>
            <button @click="nextQuestion">下一题</button>
        </div> -->
    </div>
</template>
<script>
import * as questions from './assets/scripts/wj.json'

export default {
    data () {
        return {
            sections: questions.data.questionnaire.section,
            questionnaireName: questions.data.questionnaire.questionnaireName,
            questionCount: questions.data.questionnaire.questionCount,
            questions: questions.data.questionnaire.section,
            currentQuestionIndex: 0,
            currentQuestionSection: 0,
            currentQuestion: questions.data.questionnaire.section[0].questions[0],
            nextQuestion: {},
            previousQuestion: {}

        }
    },
    methods: {
        initQuestion () {

        },
        toPreviousQuestion () {
            console.log('上一题')
        },
        toNextQuestion () {
            console.log('下一题')
        }
    },
    mounted () {
        console.log(this.questions)
        console.log(this.currentQuestion.options)
    }
}
</script>
<style scoped>
.questionnaire-info {
    width: 960px;
    margin: 0 auto;
}

.questionnaire-name {
    margin-top: 16px;
    text-align: center;
    font-size: 18px;
}

.question-list {
    width: 960px;
    margin: 0 auto;
    padding-bottom: 20px;
}

.question-item:first-of-type {
    margin-top: 0;
}

.section-item {
    margin-top: 20px;
}

.section-item:first-of-type {
    margin-top: 0;
}

.section-name {
    font-size: 22px;
    color: #f55d54;
}

.question-item {
    border: 1px solid #e1e1e1;
    margin-top: 20px;
    padding: 10px 14px;
}

.question-item-active {
    border: 2px solid #a3cb36;
}
</style>
