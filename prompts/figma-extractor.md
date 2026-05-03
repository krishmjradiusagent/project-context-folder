# Figma → Context Extractor Prompt

Extract design truth from Figma/screenshot.

Return JSON only:

{
  "frame": {
    "name": "",
    "width": 0,
    "height": 0,
    "platform": "web|mobile",
    "mode": "light|dark"
  },
  "layout": {
    "grid": "",
    "columns": 0,
    "gaps": [],
    "padding": []
  },
  "typography": [
    {
      "role": "heading|body|caption|label",
      "fontFamily": "",
      "fontSize": 0,
      "fontWeight": "",
      "lineHeight": "",
      "colorToken": ""
    }
  ],
  "components": [
    {
      "name": "",
      "type": "Button|Card|Dialog|Table|Badge|Input|Other",
      "states": [],
      "notes": ""
    }
  ],
  "spacing": {
    "observed": [],
    "rules": []
  },
  "tokens": {
    "colors": [],
    "radius": [],
    "shadow": []
  },
  "implementation_notes": [],
  "do_not_change": []
}
