# how we got data from current (Feb 2020) ERC website
from requests_html import HTML, HTMLSession
from pprint import pprint

session = HTMLSession()
htmlFile = session.get('https://erc.tech-iitb.org/')
htmlFile = htmlFile.html


teamSection = htmlFile.find('.team-section', first=True)
teamCards = teamSection.find('.team-contact-card')

data = []

for teamCard in teamCards:
    memberData = {}

    name = teamCard.find('.team-member-name', first=True)
    memberData.update({"name": name.text})

    title = teamCard.find('.team-member-pos', first=True)
    memberData.update({"title": title.text})

    linksParent = teamCard.find(".team-member-contact", first=True)
    linksClasses = {'facebook': 'fa-facebook-f', 'linkedIn': 'fa-linkedin-in',
                    'github': 'fa-github', 'mail': 'fa-envelope'}

    numErrors = 0

    linksData = {}
    doneLinks = {'facebook': False, 'linkedIn': False,
                    'github': False, 'mail': False}

    for linkTag in linksParent.find("a"):
        
        for linkName, link in linksClasses.items():
            tagsFound = []
            try:
                tagsFound = linkTag.find('.{}'.format(link))
            except:
                print("hello")
                tagsFound = []
            if len(tagsFound) > 0:
                try:
                    if linkName != "mail":
                        linksData.update({linkName: linkTag.attrs['href'].replace(" ", "")})
                    else:
                        # removing mailto
                        linksData.update({linkName: linkTag.attrs['href'].replace(" ", "")[7:]})  
                    
                    doneLinks[linkName] = True
                    break
                except:
                    numErrors = numErrors + 1
                    print(
                        'Error getting link: {} for: {} ----'.format(linkName, memberData['name']))
                
    for linkName, isDone in doneLinks.items():
        if not isDone:
            linksData.update({linkName: '#'})
            print('Error: no link for {} for: {}'.format(
                linkName, memberData['name']))
    
    memberData.update({"links": linksData})

    data.append(memberData)

print("CLEARING FOR DATA PRINT...\n\n\n\n\n\n\n\n\n")
pprint(data)
print("\n\n\n\n\n\n\n\n\nDATA PRINTED FOR {} PEOPLE".format(len(data)))

# code for local use
# with open('./index.html') as htmlFile:
#     source = htmlFile.read()
#     htmlFile = HTML(html=source)
