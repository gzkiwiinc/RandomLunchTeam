'use strict'

const utils = require('./utils');
const Table = require('cli-table');
const request = require('superagent');

class Random{
  constructor(members){
    this.members = members;
  }

  except(members){
    for (let i = members.length - 1; i >= 0; i--) {
      this.members.splice(this.members.indexOf(members[i]), 1);
    }
    return this;
  }

  group(groupCount){
    let memberCountPerGroup = Math.floor(this.members.length / groupCount);
    this.members = utils.shuffle(this.members);

    let restMemberCount = 0;
    if ( this.members.length % groupCount ) {
      restMemberCount = this.members.length % groupCount;
    }

    let group = [];
    for (let i = 0; i < groupCount; i++) {
      group.push(this.members.slice(i * memberCountPerGroup, (i + 1) * memberCountPerGroup));
    };

    if (restMemberCount) {
      for(let i = 1; i < restMemberCount + 1; i++){
        group[i-1] = group[i-1].concat(this.members[this.members.length - i]);
      }
    };

    // table cli
    let head = [];
    let colWidths = [];
    for (let i = 1; i < groupCount + 1; i++){
      head.push(`Sickga ${i} Team`);
      colWidths.push(30);
    }

    let table = new Table({
      head,
      colWidths
    })
    table.push(group);

    console.log(table.toString());

    let stringifyGroups = '';

    for(let i = 1; i < group.length + 1; i++){
      stringifyGroups = stringifyGroups + `\n 食家 ${i} 组 \n ${group[i - 1].join(',')}`
    }

    // request
    //   .post(this.hooks)
    //   .send({
    //     text: stringifyGroups,
    //     channel: '#lunch'
    //   })
    //   .end((err,res) => {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       console.log(res.body);
    //     }
    //   })

    console.log(table.toString());

    return stringifyGroups;
  }
}

module.exports = Random;