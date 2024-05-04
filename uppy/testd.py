# 4986 charactars are translated once fastest translator till now

# import time
# from googletrans import Translator
# import random

# def generate_sentences(num_sentences, min_words, max_words):
#     sentences = []
#     for _ in range(num_sentences):
#         num_words = random.randint(min_words, max_words)
#         sentence = ' '.join(['word'] * num_words)  # Generate a sentence with random number of words
#         sentences.append(sentence)
#     return sentences

# def translate_sentences(sentences, target_lang='en'):
#     translator = Translator()
#     translated_sentences = []
#     for sentence in sentences:
#         translated_sentence = translator.translate(sentence, dest=target_lang).text
#         translated_sentences.append(translated_sentence)
#         print(translated_sentence)
#     return translated_sentences

# def main():
#     target_lang = 'hi'

#     # Generate sentences
#     sentences = [
#     "Hickory dickory dock",
#     "The mouse ran up the clock",
#     "The clock struck one",
#     "The mouse ran down",
#     "Hickory dickory dock",
#     "Baa, baa, black sheep",
#     "Have you any wool?",
#     "Yes sir, yes sir",
#     "Three bags full",
#     "One for the master",
#     "One for the dame",
#     "And one for the little boy",
#     "Who lives down the lane",
#     "Mary, Mary, quite contrary",
#     "How does your garden grow?",
#     "With silver bells and cockle shells",
#     "And pretty maids all in a row",
#     "Little Miss Muffet",
#     "Sat on a tuffet",
#     "Eating her curds and whey",
#     "Along came a spider",
#     "Who sat down beside her",
#     "And frightened Miss Muffet away",
#     "Hey diddle diddle",
#     "The cat and the fiddle",
#     "The cow jumped over the moon",
#     "The little dog laughed to see such fun",
#     "And the dish ran away with the spoon",
#     "Old Mother Hubbard",
#     "Went to the cupboard",
#     "To get her poor dog a bone",
#     "But when she got there",
#     "The cupboard was bare",
#     "And so the poor dog had none"
# ]
    
#     # Translate sentences
#     start_time = time.time()
#     print("Started!!")
#     translated_sentences = translate_sentences(sentences, target_lang)
#     print("Donne!!\n\n")
#     end_time = time.time()

#     # Print original and translated sentences
#     for original, translated in zip(sentences, translated_sentences):
#         print("Original:", original)
#         print("Translated:", translated)
#         print()

#     # Print total time taken for translation
#     print("Total time taken:", end_time - start_time, "seconds")

# if __name__ == "__main__":
#     main()


# import asyncio
# import time
# from googletrans import Translator

# async def translate_batch(sentences, target_lang='en'):
#     translator = Translator()
#     translated_sentences = []
#     for sentence in sentences:
#         translated_sentence = translator.translate(sentence, dest=target_lang).text
#         translated_sentences.append(translated_sentence)
#     return translated_sentences

# async def main():
#     target_lang = 'hi'
#     sentences = [
#     "Hickory dickory dock",
#     "The mouse ran up the clock",
#     "The clock struck one",
#     "The mouse ran down",
#     "Hickory dickory dock",
#     "Baa, baa, black sheep",
#     "Have you any wool?",
#     "Yes sir, yes sir",
#     "Three bags full",
#     "One for the master",
#     "One for the dame",
#     "And one for the little boy",
#     "Who lives down the lane",
#     "Mary, Mary, quite contrary",
#     "How does your garden grow?",
#     "With silver bells and cockle shells",
#     "And pretty maids all in a row",
#     "Little Miss Muffet",
#     "Sat on a tuffet",
#     "Eating her curds and whey",
#     "Along came a spider",
#     "Who sat down beside her",
#     "And frightened Miss Muffet away",
#     "Hey diddle diddle",
#     "The cat and the fiddle",
#     "The cow jumped over the moon",
#     "The little dog laughed to see such fun",
#     "And the dish ran away with the spoon",
#     "Old Mother Hubbard",
#     "Went to the cupboard",
#     "To get her poor dog a bone",
#     "But when she got there",
#     "The cupboard was bare",
#     "And so the poor dog had none"
# ]
    
#     # Split sentences into batches (e.g., batches of 10 sentences)
#     batch_size = 10
#     batches = [sentences[i:i+batch_size] for i in range(0, len(sentences), batch_size)]

#     # Translate batches concurrently
#     start_time = time.time()
#     print("Started!!")
#     tasks = [translate_batch(batch, target_lang) for batch in batches]
#     translated_batches = await asyncio.gather(*tasks)
#     translated_sentences = [sentence for batch in translated_batches for sentence in batch]
#     print("Done!!\n\n")
#     end_time = time.time()

#     # Print original and translated sentences
#     for original, translated in zip(sentences, translated_sentences):
#         print("Original:", original)
#         print("Translated:", translated)
#         print()

#     # Print total time taken for translation
#     print("Total time taken:", end_time - start_time, "seconds")

# if __name__ == "__main__":
#     asyncio.run(main())



# ==============================================

import time
import random
from deep_translator import (GoogleTranslator,
                             ChatGptTranslator,
                             MicrosoftTranslator,
                             PonsTranslator,
                             LingueeTranslator,
                             MyMemoryTranslator,
                             YandexTranslator,
                             PapagoTranslator,
                             DeeplTranslator,
                             QcriTranslator,
                             single_detection,
                             batch_detection)

def translate_sentences(sentences, target_lang='en'):
    translated_sentences = []
    for sentence in sentences:
        # translated_sentence = GoogleTranslator(source='auto', target=target_lang).translate(sentence)
        translated_sentence = PonsTranslator(source='en', target=target_lang).translate(sentence)
        translated_sentences.append(translated_sentence)
    return translated_sentences

def main():
    target_lang = 'es'

    # Generate sentences
    sentences = [
    "Hickory dickory dock",
    "The mouse ran up the clock",
    "The clock struck one",
    "The mouse ran down",
    "Hickory dickory dock",
    "Baa, baa, black sheep",
    "Have you any wool?",
    "Yes sir, yes sir",
    "Three bags full",
    "One for the master",
    "One for the dame",
    "And one for the little boy",
    "Who lives down the lane",
    "Mary, Mary, quite contrary",
    "How does your garden grow?",
    "With silver bells and cockle shells",
    "And pretty maids all in a row",
    "Little Miss Muffet",
    "Sat on a tuffet",
    "Eating her curds and whey",
    "Along came a spider",
    "Who sat down beside her",
    "And frightened Miss Muffet away",
    "Hey diddle diddle",
    "The cat and the fiddle",
    "The cow jumped over the moon",
    "The little dog laughed to see such fun",
    "And the dish ran away with the spoon",
    "Old Mother Hubbard",
    "Went to the cupboard",
    "To get her poor dog a bone",
    "But when she got there",
    "The cupboard was bare",
    "And so the poor dog had none"
]

    # Translate sentences
    start_time = time.time()
    print("Started!!")
    translated_sentences = translate_sentences(sentences, target_lang)
    print("Done!!\n\n")
    end_time = time.time()

    # Print original and translated sentences
    for original, translated in zip(sentences, translated_sentences):
        print("Original:", original)
        print("Translated:", translated)
        print()

    # Print total time taken for translation
    print("Total time taken:", end_time - start_time, "seconds")

if __name__ == "__main__":
    main()

# Have to impliment this on webpages
