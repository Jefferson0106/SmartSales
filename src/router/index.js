import {createRouter, createWebHistory} from 'vue-router'

import {
	HomeOne, HomeTwo, HomeThree, About, ChooseUs, Team, Price, Faq, ServiceOne, ServiceTwo, ServiceDetails, Project, ProjectDetails, Blog, BlogDetails, Contact

	
  } from "../views";
  import HeroOne from '../components/heroarea/HeroOne.vue';





const routes = [
	{
		path: "/",
		name: "home",
		component: HomeOne,
		children: [
			{ name: '/HeroOne', path: 'HeroOne', component: HeroOne },
			
		  ]
	},		
	{
		path: "/index-2",
		name: "home2",
		component: HomeTwo,
	},		
	{
		path: "/index-3",
		name: "home3",
		component: HomeThree,
	},		
	{
		path: "/about",
		name: "about",
		component: About,
	},		
	{
		path: "/choose-us",
		name: "choose-us",
		component: ChooseUs,
	},		
	{
		path: "/team",
		name: "team",
		component: Team,
	},		
	{
		path: "/price",
		name: "price",
		component: Price,
	},		
	{
		path: "/faq",
		name: "faq",
		component: Faq,
	},		
	{
		path: "/service-1",
		name: "service-1",
		component: ServiceOne,
	},		
	{
		path: "/service-2",
		name: "service-2",
		component: ServiceTwo,
	},		
	{
		path: "/service-details",
		name: "service-details",
		component: ServiceDetails,
	},		
	{
		path: "/project",
		name: "project",
		component: Project,
	},		
	{
		path: "/project-details",
		name: "project-details",
		component: ProjectDetails,
	},		
	{
		path: "/blog",
		name: "blog",
		component: Blog,
	},		
	{
		path: "/blog-details",
		name: "blog-details",
		component: BlogDetails,
	},		
	{
		path: "/contact",
		name: "contact",
		component: Contact,
	},		
		
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
	scrollBehavior(to, from, savedPosition) {
	  if (savedPosition) {
		return savedPosition;
	  } else {
		return { top: 0, left: 0 };
	  }
	},
  });

export default router
