'use strict'

const utils = require('./utils');
const Table = require('cli-table');

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

  run(expectGroupCount){
    let groupCount = expectGroupCount;
    let memberCountPerGroup = Math.floor(this.members.length / expectGroupCount);
    this.members = utils.shuffle(this.members);

    let restMemberCount = 0;
    if ( this.members.length % expectGroupCount ) {
      groupCount++;
      restMemberCount = this.members.length % expectGroupCount;
    }

    let group = [];
    for (let i = 0; i < expectGroupCount; i++) {
      group.push(this.members.slice(i * memberCountPerGroup, (i + 1) * memberCountPerGroup));
    };

    if (restMemberCount) {
      group.push(this.members.slice(-restMemberCount));
    };

    // table cli
    let head = [];
    let colWidths = [];
    for (let i = 1; i < groupCount + 1; i++){
      head.push(`Sickga ${i} Team`);
      colWidths.push(20);
    }
    let table = new Table({
      head,
      colWidths
    })
    table.push(group);

    console.log(table.toString());

    return this;
  }
}

module.exports = Random;