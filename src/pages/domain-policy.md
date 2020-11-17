Website Domain Policy
=====================


Purpose
-------

The Website Domain Policy explains how the executive branch of the Commonwealth of Massachusetts manages official government website domain names. (Website domain names are also known web addresses, unique resource locators, or URLs). Specifically, it defines standards and processes relevant to Mass.gov, Massachusetts.gov, Ma.gov, State.ma.us, their subdomains (e.g. example.mass.gov), and any requests for new official government websites.

The purpose of this policy is to:
1.	Uphold a high standard of quality for constituents’ experience interacting with the Commonwealth over the Internet
1.	Build trust between constituents and the websites that provide government services
1.	Protect constituents from private websites masquerading as government websites for nefarious purposes


Enforcement
-----------

Requests for new domain names will only be approved for web applications in compliance with this policy.

Websites that do not stay in compliance with this policy may have their domain name revoked.

Websites created before this policy are expected to come into compliance with this policy as they make new updates.


Scope
-----

The policy applies to these organizations:
* All state agencies in the Executive Department
* All executive offices, boards, commissions, agencies, departments, divisions, councils, and bureaus
* Any government organization hosting web applications with the Executive Office of Technology Services and Security (EOTSS)
* Any government organization obtaining an official government web domain through the EOTSS

This policy applies to these domains:
* Mass.gov
* Massachusetts.gov
* Ma.gov
* State.ma.us
* Related subdomains (e.g. example.mass.gov)
* All domains owned and managed by EOTSS

This policy applies to these usages and technologies:
* Websites and web applications (both referred to in this document as “websites”) accessible to the public on the Internet
* Application programming interfaces (APIs) accessible on the public Internet
* Third party websites used to conduct business on behalf of the Commonwealth


Authority
----------

[M.G.L. Ch. 7D Section 2](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter7D/Section2) provides that:

“Notwithstanding any general or special law, rule, regulation, executive order, policy or procedure to the contrary, all executive department agencies shall, and other state agencies may, adhere to the policies, procedures and objectives established by the executive office of technology services and security with respect to activities concerning information technology.”

[M.G.L. Ch. 7D Section 4C](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleII/Chapter7D/Section4C) provides that:

“The chief digital officer is directed to lead an effort to improve the public facing web presence and related services for executive department offices and agencies.”


Responsibility for approvals, oversight, and updates
----------------------------------------------------

The Chief Digital Officer (CDO) is responsible for approving requests for all public-facing websites, developing this policy, maintaining and updating this policy. The most recent published version of this policy can be found here: [https://mass.gov/website-domain-policy](https://mass.gov/website-domain-policy).

The CDO is responsible for monitoring compliance with this policy and may enlist other departments in the enforcement of this standard.

Questions, comments, and proposed updates can be submitted to the CDO by posting an issue or proposing specific changes on GitHub here: [https://github.com/massgov/policies-and-guidelines](https://github.com/massgov/policies-and-guidelines).


DNS standards
-------------

The Commonwealth’s Chief Information Security Officer (CISO) is responsible for the Commonwealth’s broader DNS standards applying to all government websites. All policies here comply with those standards and will be updated to continue to comply when those standards are published and as they continue to evolve.

These are the key points of anticipated intersection with the forthcoming DNS policies for website owners to consider when making plans to create and maintain new government websites:
* Subdomains of [Mass.gov](https://mass.gov) will not be delegated. EOTSS will maintain control of DNS for the [Mass.gov](https://mass.gov) domain and subdomains.
* Hosts must be managed by EOTSS, either directly or under contract.
* Hosts must use EOTSS-approved SSL certificates, and preferably certificates provisioned and managed by EOTSS.
* Hosts must use EOTSS’ domain name servers.

Here’s what all this means for non-technical business owners of new websites:
* You have to get your domain name through EOTSS. You can’t buy a domain name from GoDaddy.com, Google, Wix, or any other third party.
* Changes and updates to domain names must be made by EOTSS. You’ll have to do this by opening a ServiceNow ticket. (See section “How To”) You can’t make these changes yourself.
* If you’re using a third party service to send bulk emails, like Mail Chimp or Send Grid, you’ll need to open a ServiceNow ticket to have EOTSS create the DNS records needed to verify you’re not a spammer. (See [“How to send emails from your website domain.”](#how-to-send-emails-from-your-website-domain)) You can’t make these changes yourself.


Compliance and exceptions
-------------------------

Compliance with this document is mandatory for all state agencies in the Executive Department. Violation of this document may cause irreparable injury to the Commonwealth of Massachusetts. Violations are subject to disciplinary action in accordance to applicable employment and collective bargaining agreements, up to and including the termination of employment and/or assignment with the Commonwealth. Other consequences of violations may include the initiation of civil and/or criminal proceedings by the Commonwealth.

Exceptions to any part of this document must be requested via GitHub and approved by the CDO here: [https://github.com/massgov/guidelines/issues](https://github.com/massgov/guidelines/issues).

A policy exception may be granted only if the benefits of the exception outweigh the increased risks, as determined by the Commonwealth CDO, CISO, or appointed designee.


Policy change control
---------------------

Versioned changes to the policies and guidelines in this document are outlined below. Past versions can be downloaded from GitHub here: [https://github.com/massgov/policies-and-guidelines/tags](https://github.com/massgov/policies-and-guidelines/tags).

<table>
  <tr>
    <th>Version Number</th>
    <th>Revised by</th>
    <th>Effective date</th>
    <th>Description of changes</th>
  </tr>
  <tr>
    <td>0.0.1</td>
    <td>Bryan Hirsch, Matt Moran, John Merto</td>
    <td></td>
    <td>First working draft published to solicit stakeholder input ahead of 3/31/21 effective date for version 1.0.0.</td>
  </tr>
  <tr>
    <td>1.0.0</td>
    <td>Bryan Hirsch, Matt Moran, John Merto</td>
    <td>3/31/21</td>
    <td>(Planned)</td>
  </tr>
</table>

(This policy’s version numbers follow semantic versioning conventions. See the section ["Version Numbers"](#version-numbers) for more information.)


Domains for Mass.gov websites and email
---------------------------------------

Mass.gov is the primary digital identity of the Commonwealth for public-facing government services. This means:
* Executive agencies must use only Mass.gov domains (e.g. mass.gov/example and example.mass.gov).
* It is highly discouraged to use any other top-level domain (e.g. example.gov).
* Massachusetts.gov and ma.gov have been registered with EOTSS to protect the integrity of these names and avoid confusion.
* www.ma.gov and www.massachusetts.gov forward to www.mass.gov.
* The @mass.gov email address suffix is the standard for email addresses in the executive branch, supplanting @state.ma.us. Only EOTSS-supported email systems may use @mass.gov addresses.

Mass.gov and its subdomains (e.g. example.mass.gov, another.example.mass.gov) are intended for websites that fit all the following descriptions:
* Official Massachusetts government websites
* Websites accessible over the public Internet
* Websites that comply with policies established by the GSA for .gov domains
* Websites that comply with [“Guidelines for constituent-facing websites”](#guidelines-for-constituent-facing-websites)

Mass.gov and its subdomains may not be used for:
* Enterprise services available only inside the state network
* Websites with non-government advertisements
* Websites with political or campaign information
* Websites involved in criminal activity
* Websites with obscene images, inappropriate sexually oriented material, or extremist material
* Websites with links to sites that violate content restrictions


Domains for other .gov websites
-------------------------------

Top-level domains other than Mass.gov are only approved if the agency head and EOTSS explicitly determine another domain is necessary for the proper performance of an agency function.


Domains with state.ma.us
------------------------

Legacy state.ma.us domains exist. To update these to a Mass.gov domain, the application must be brought into compliance with all guidelines applicable to Mass.gov domains. New subdomains of state.ma.us for executive branch agencies will only be created for exceptional circumstances.


Domain not ending in .gov
-------------------------

Government organizations are strongly discouraged from using domains that do not end in “.gov”. Anyone can buy one. Private websites masquerade as government websites in order to steal personal information or trick constituents into paying unnecessary fees. This breeds distrust. To build constituents’ trust and to protect their privacy and security, the Commonwealth is moving away from privately procured domains and standardizing primarily on Mass.gov and secondarily on other .gov domains.

This guidance is consistent with the federal government guidelines. The [United States Web Design System](https://designsystem.digital.gov/) encourages all federal government sites to include a standard government website banner, which educates constituents that "official government websites use .gov."


Guidelines for constituent-facing websites
------------------------------------------

The guidelines below aim to ensure the entire Mass.gov ecosystem:
* Earns constituents’ trust and confidence
* Creates an inclusive, dignified, and efficient user experience
* Promotes consistency and simplicity
* Allows state entities to efficiently design, build, buy, launch, and maintain websites
* Presents a single face of government to constituents

To the greatest extent possible any new website, web-based form, web-based application, or digital service will follow these guidelines:

* Be accessible to individuals with disabilities according to [Massachusetts Accessibility Guidelines](#accessibility-guidelines);
* Be fully functional and usable on all modern devices according to [Massachusetts Accessibility Guidelines](#accessibility-guidelines);
* Be provided through an industry standard secure connection according to [Massachusetts HTTPS-Only Guidelines](#https-only-guidelines);
* Not overlap with or duplicate any other Mass.gov site, and, if applicable, ensure that legacy websites are reviewed, eliminated, and consolidated;
* Promote a consistent look and feel according to [Massachusetts Design Guidelines](#design-guidelines);
* Be designed around user needs according to [Massachusetts Design Guidelines](#design-guidelines);
* Solicit user feedback according to [Massachusetts Design Guidelines](#design-guidelines);
* Leverage web analytics and usage statistics according to [Massachusetts Design Guidelines](#design-guidelines);
* Contain a search function that allows users to easily search content intended for public use according to [Massachusetts Search Guidelines](#design-guidelines);
* Use plain language consistent with guidance from [plainlanguage.gov](https://www.plainlanguage.gov/);
* And will use a domain name consistent with [Mass.gov Naming Conventions](#massgov-domain-naming-conventions).


How to get a domain name for your website
-----------------------------------------

To publish web pages beginning with Mass.gov (e.g. mass.gov/example1, mass.gov/example2), government organizations may request access to the Mass.gov content management system (CMS). Detailed instructions are [here].

To request a subdomain (e.g. example1.mass.gov, example2.mass.gov) that can be pointed at your own website or web service, open a ticket in ServiceNow. Detailed instructions are [here].

To request a new official government (“.gov”) domain, please submit a request through GitHub [here](https://github.com/massgov/guidelines/issues). Detailed instructions are [here].


How to send emails from your website domain
-------------------------------------------

If your web application sends or receives emails, you will want to have these emails come from an official government email address. That is, you will want your emails to come from example@mass.gov or example@mysite.mass.gov. Step-by-step instructions for setting this up can be found [here].

Please note: New state government email addresses all end in @mass.gov. For example most government email addresses look like these: firstname.lastname@mass.gov, jane.smith@mass.gov, john.doe@mass.gov, etc. You are not able to set up email accounts for individuals with your subdomain such as example@mysite.mass.gov.


How to update a state.ma.us domain to a mass.gov domain
-------------------------------------------------------

If you currently have a domain like example.state.ma.us, which you would like to update to example.mass.gov, please follow the step-by-step instructions [here]
