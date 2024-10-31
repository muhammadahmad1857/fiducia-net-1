import reviews from "./reviews";
import services from "./services";
import projects from "./projects";
import technologies from "./technologies";
import team from "./teams";
import TextSliderSchema from "./textSlider";
import slidesData from "./slidesData";
import blog from "./blog";
import faq from "./faq";

export const schema = {
  types: [
    reviews,
    services,
    projects,
    technologies,
    TextSliderSchema,
    slidesData,
    blog,
    faq,
    team,
  ],
};
