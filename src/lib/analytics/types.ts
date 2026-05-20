export type AnalyticsEvent =
  | "cv_download_click"
  | "contact_form_submit"
  | "section_view"
  | "button_click"
  | "project_view";

export type EventParams = {
  cv_download_click: {
    location?: string;
  };

  contact_form_submit: {
    status: "success" | "error";
  };

  section_view: {
    section:
      | "hello"
      | "about"
      | "experiences"
      | "skills"
      | "projects"
      | "testimonials"
      | "plans"
      | "contact";
  };

  button_click: {
    button_name: string;
  };

  project_view: {
    project_name: string;
  };
};
