import {Component} from '@angular/core';
import {Proposal } from './proposal';

@Component({
    moduleId: module.id,
    selector: 'proposal-list',
    templateUrl: 'proposal-list.component.html'
})

export class ProposalListComponent{
    proposalOne: Proposal = new Proposal(
        15, 'Abc', 'http://posd.com','rubyonrails',150,120,15,'sdkj@gmail.com')
    
    proposalTwo: Proposal = new Proposal(
        15, 'asdfasdfAbc', 'http://posd.com','rubyonrails',150,120,15,'sdkj@gmail.com')
    
    proposalThree: Proposal = new Proposal(
        115, 'sdafasdfAbc', 'http://posd.com','rubyonrails',150,120,15,'sdkj@gmail.com' )
        
    proposals: Proposal[] = [this.proposalOne,this.proposalTwo,this.proposalThree]
}