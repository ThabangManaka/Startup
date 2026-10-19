import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
categories: string[] = [
  'All',
  'AI & Automation',
  'Web Development',
  'Business Solutions'
];

selectedCategory = 'All';

projects = [
  {
    number: '01',
    title: 'AI Business Assistant',
    category: 'AI & Automation',
    description:
      'An example of an AI assistant that helps businesses answer questions and streamline everyday tasks.',
    technologies: ['AI', 'Automation', 'Integration'],
    symbol: '✳',
    theme: 'theme-ai',
    label: 'Concept project'
  },
  {
    number: '02',
    title: 'Business Website',
    category: 'Web Development',
    description:
      'A responsive business website designed to present services, attract visitors, and generate enquiries.',
    technologies: ['Angular', 'TypeScript', 'SCSS'],
    symbol: '</>',
    theme: 'theme-web',
    label: 'Concept project'
  },
  {
    number: '03',
    title: 'Fleet Management System',
    category: 'Business Solutions',
    description:
      'An example fleet management application for organising vehicles, tracking records, and managing operations.',
    technologies: ['.NET API', 'Angular', 'SQL Server'],
    symbol: '↗',
    theme: 'theme-business',
    label: 'Example application'
  },
  {
    number: '04',
    title: 'Workflow Automation',
    category: 'AI & Automation',
    description:
      'A proposed workflow solution to reduce repetitive tasks and help teams work more efficiently.',
    technologies: ['AI', 'APIs', 'Automation'],
    symbol: '⚙',
    theme: 'theme-workflow',
    label: 'Concept project'
  },
  {
    number: '05',
    title: 'Customer Portal',
    category: 'Web Development',
    description:
      'A web portal concept that gives customers a convenient place to access services and submit requests.',
    technologies: ['Angular', 'REST API', 'Responsive UI'],
    symbol: '▣',
    theme: 'theme-portal',
    label: 'Concept project'
  },
  {
    number: '06',
    title: 'Business Operations Dashboard',
    category: 'Business Solutions',
    description:
      'A dashboard concept for presenting business data, operational indicators, and useful reporting.',
    technologies: ['Dashboards', 'Data', 'APIs'],
    symbol: '▥',
    theme: 'theme-dashboard',
    label: 'Concept project'
  }
];

get filteredProjects() {
  if (this.selectedCategory === 'All') {
    return this.projects;
  }

  return this.projects.filter(
    project => project.category === this.selectedCategory
  );
}

filterProjects(category: string): void {
  this.selectedCategory = category;
}
}
