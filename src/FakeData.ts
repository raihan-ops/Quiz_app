export const multipleChoice="multipleChoice";
export const multiSelect="multiSelect";

export const fillInTheBlanck="fillInTheBlanck";
export const trueFalse="trueFalse";
export const followingMatch="followingMatch";
export interface QuestionInfo {
    id:number,
    type:string,
    title:string,
    options:string[],
    lang:string,
    ans:string[],
    matchAns?:string []

}

export const qList:QuestionInfo[]=[
    {
        id:1,
        type:multipleChoice,
        title:"React is ?",
        options:["tag","framework","libray","service"],
        ans:["libray"],
        lang:"React"

    },
    {
        id:2,
        type:multiSelect,
        title:"hooks are In the react ?",
        options:["useState","useEffect","class","div"],
        ans:["useState","useEffect"],
        lang:"React"

    },
    {
        id:3,
        type:fillInTheBlanck,
        title:"react component return ------- ?",
        options:["Single","Both","Multiple","Double"],
        ans:["Single"],
        lang:"React"

    },
    {
        id:4,
        type:trueFalse,
        title:"Crome is  using v8 engine",
        options:["true","fales"],
        ans:["true"],
        lang:"React"

    },
    {
        id:5,
        type:followingMatch,
        title:"Match the following",
        options:["js","ts",],
        matchAns:["react","anguler"],
        ans:["js->react","ts->anguler"],
        lang:"React"

    },
    {
        id:6,
        type:multipleChoice,
        title:"css using ?",
        options:["design","tag","component","all"],
        ans:["design"],
        lang:"css"

    },
    {
        id:7,
        type:multiSelect,
        title:"css selector ",
        options:["id","class","fog","cat"],
        ans:["id","class"],
        lang:"css"

    },
    {
        id:8,
        type:fillInTheBlanck,
        title:"text bold using css --------?",
        options:["fontweight","weight","font","b"],
        ans:["fontweight"],
        lang:"css"

    },
    {
        id:9,
        type:trueFalse,
        title:"css using for design ",
        options:["true","false",],
        ans:["true"],
        lang:"css"

    },
    {
        id:10,
        type:followingMatch,
        title:"Match the following",
        options:["css","php",],
        matchAns:["mui","laravel"],
        ans:["css->mui","php->laravel"],
        lang:"css"

    },
]

export const getQuestionByLang=(value:string):QuestionInfo []=>{
 return  qList.filter((q)=>q.lang.toLocaleLowerCase()===value.toLocaleLowerCase() );

}

export const getQuestionById=(id:number):QuestionInfo | undefined=>{
    return qList.find((q)=>q.id=== id);

}
