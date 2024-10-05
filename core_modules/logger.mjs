import chalk from 'chalk';
export function logger(message,color = 'white'){
    console.log(chalk[color](message));
}