# List main fork

Jay's 64b Torch AI version - is probably the most mature one, leveraging Torch instead of TensorFlow, and designed to run on 64b Pis (like pi4, pi5, pi02). https://github.com/jayofelony/pwnagotchi
Jay's "No-AI" version - basically the same thing, but it drops the "AI" part, making it faster, harder, better stronger. - https://github.com/Pwnagotchi-Unofficial/pwnagotchi-torch-no_ai

Nurse's 32b Torch version - from what I understand, the same as Jay's 64b Torch version, but also working on 32b systems. https://github.com/Sniffleupagus/pwnagotchi-snflpgs

Alum's version - Removes broken dependencies and kali-pi, stable kernel, usage of nexmon, and some QoL improvements. I think it also runs on 32b boards, but still uses TF. https://github.com/aluminum-ice/pwnagotchi

WPA2's fix - In essence, the original thing, but with AI fixed. https://github.com/wpa-2/pwnagotchi

Clean fork - start from scratch, introduce changes from the rest with PRs. Might make sense for merging together Alices' and WPA's forks together into one working 32b "legacy" version for oldschoolers running Pi01. 