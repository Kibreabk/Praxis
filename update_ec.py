import re

with open("src/data/extracurriculars.ts", "r", encoding="utf-8") as f:
    content = f.read()

if "deadline?: string;" not in content:
    content = content.replace("brandColor: string;", "brandColor: string;\n  deadline?: string;")

deadlines = {
    "pioneer": "Dec & Feb (Spring/Summer), April (Fall)",
    "lumiere": "Rolling Admissions (Multiple Cohorts)",
    "horizon": "Rolling Admissions",
    "asdrp": "Varies (Rolling)",
    "scimi": "May - June",
    "indigo": "Rolling Admissions",
    "rsi": "Mid-December / Early February",
    "openbio": "Spring",
    "srs": "Late March",
    "promys": "Early March",
    "sumac": "Mid-March",
    "mathcamp": "Early March",
    "ssp": "Late February",
    "smith-ssep": "Late April",
    "cty": "Varies",
    "addiscoder": "Early June (Varies by year)",
    "veritas-ai": "Rolling (Multiple Cohorts)",
    "tks": "April (Early) / June (Regular)",
    "launchx": "Early: Dec / Regular: April",
    "young-founders": "Rolling Admissions",
    "harvard-venture": "Check Website",
    "ladder": "Rolling Admissions",
    "standout": "Rolling Admissions",
    "yygs": "Early: Nov / Regular: Jan",
    "yyas": "Early February",
    "tass": "Early January",
    "gyel": "Rolling Admissions",
    "efl": "Early: Feb / Regular: April",
    "rustic-climate": "Rolling Admissions",
    "seaside-sustainability": "Rolling Admissions",
    "shi": "Mid-March",
    "john-locke-programs": "Check Website",
    "john-locke-essay": "Late June",
    "nhd": "Regional Deadlines Vary (Jan-March)",
    "isef": "Varies by Regional Fair",
    "amc": "Oct/Nov (Registration)",
    "mun": "Varies by Conference"
}

def replacer_id(match):
    id_val = match.group(1)
    deadline = deadlines.get(id_val, "N/A (Self-Paced)")
    return f'id: "{id_val}",\n    deadline: "{deadline}"'

content = re.sub(r'id:\s*"([^"]+)"', replacer_id, content)

with open("src/data/extracurriculars.ts", "w", encoding="utf-8") as f:
    f.write(content)
