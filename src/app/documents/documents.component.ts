import { Component } from '@angular/core';
import {Document} from './document';

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
	pageTitle: string = "Document Dashboard"
	documents: Document[] = [
			{ title: "My First Doc", 
		    description: "blahblah", 
		    file_url: "google.com", 
		    updated_at: "1.1.2013", 
		    image_url: "naver.com" },
		    
		    { title: "My Second Doc", 
		    description: "blahblah", 
		    file_url: "google.com", 
		    updated_at: "1.1.2013", 
		    image_url: "naver.com" },
		    
		    { title: "My Last Doc", 
		    description: "blahblah", 
		    file_url: "google.com", 
		    updated_at: "1.1.2013", 
		    image_url: "naver.com" }
	]
}