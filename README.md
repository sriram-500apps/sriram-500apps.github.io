Handlebars without including openAI helper:
```
{{#with linkedin.profile}}
{{#if personal_info}}
{{#with personal_info}}
  Write a email to {{name}}{{#if user_company}} introducing {{user_company.user_company_name}}{{/if}}. {{#if headline}}{{name}} is {{headline}}.{{/if}}

about him/her: {{summary}}

{{#with user_company}}
about {{user_company_name}}: {{title}}, {{description}} 
{{/with}}
{{/with}}
{{/if}}

{{#if experiences}}
  {{#recent_job_change experiences.jobs}}
  {{#if this}}
 {{#switch (difference_in_months date_range 'same_year')}}
            {{#case 0}}
                Congratulations on the job change to {{company}} this month.
            {{/case}}
            {{#case 1}}
                Congratulations on the job change last month. I hope things are settling down now your end.
            {{/case}}
         {{/switch}}
         
  {{#switch (difference_in_months date_range 'not_same_year')}}
            {{#case 0}}
                 Congratulations on your work anniversary this month. It would be have been a great experience to complete {{job_anniversary date_range}}.
            {{/case}}
            {{#case 1}}
                Congratulations on your work anniversary last month. It would be have been a great experience to complete {{job_anniversary date_range}}.
            {{/case}}
            {{#case 2}}
                Congratulations on your work anniversary {{get_month date_range}}. It would be have been a great experience to complete {{job_anniversary date_range}}.
            {{/case}}
            {{/switch}}
   {{/if}}
{{/recent_job_change}}
{{/if}}

{{#if connections}}
    Nice to have {{followers_count}} followers.
{{/if}}
{{/with}}

```
