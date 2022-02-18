// const process = require('process')
import process from 'process'
import {franc, francAll} from 'franc';
// const langs = require('langs')

import langs from 'langs'

if(process.argv[2])
{
    let words = process.argv.slice(2)
    let input=''
    for(let word of words)
    {
        input=input+word+" ";
    }
    //input = input.substring(0, input.length-1)
    let code = franc(input)
    if(langs.where("3", code))
    {
        console.log(langs.where("3", code).name);
    }
}
