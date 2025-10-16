"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, RotateCcw, Bookmark, BookmarkCheck } from "lucide-react";
import { Flashcard } from "@/data/flashcards";

interface FlashcardComponentProps {
  flashcard: Flashcard;
  onNext: () => void;
  onPrevious: () => void;
  onReset: () => void;
  currentIndex: number;
  total: number;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  showAnswer: boolean;
  onToggleAnswer: () => void;
}

export function FlashcardComponent({
  flashcard,
  onNext,
  onPrevious,
  onReset,
  currentIndex,
  total,
  isBookmarked,
  onToggleBookmark,
  showAnswer,
  onToggleAnswer,
}: FlashcardComponentProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setShowResult(true);
  };

  const handleNext = () => {
    onNext();
    setSelectedOption(null);
    setShowResult(false);
  };

  const handlePrevious = () => {
    onPrevious();
    setSelectedOption(null);
    setShowResult(false);
  };

  const handleReset = () => {
    onReset();
    setSelectedOption(null);
    setShowResult(false);
  };

  const isCorrect = selectedOption === flashcard.correctAnswer;
  const optionLabels = ["A", "B", "C", "D", "E"];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Badge variant="secondary">{flashcard.category}</Badge>
          <Badge variant="outline">{flashcard.examSet}</Badge>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            {currentIndex + 1} / {total}
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleBookmark}
            className="p-2"
          >
            {isBookmarked ? (
              <BookmarkCheck className="h-4 w-4 text-primary" />
            ) : (
              <Bookmark className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-secondary rounded-full h-2">
        <div
          className="bg-primary h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
        />
      </div>

      {/* Flashcard */}
      <Card className="relative overflow-hidden">
        <CardContent className="p-8">
          <div className="space-y-6">
            {/* Question */}
            <div className="text-lg font-medium leading-relaxed">
              {flashcard.id}. {flashcard.question}
            </div>

            {/* Options */}
            <div className="space-y-3">
              {flashcard.options.map((option, index) => {
                const optionLabel = optionLabels[index];
                const isSelected = selectedOption === optionLabel;
                const isCorrectOption = optionLabel === flashcard.correctAnswer;
                const showCorrect = showResult && isCorrectOption;
                const showIncorrect = showResult && isSelected && !isCorrectOption;

                return (
                  <div
                    key={index}
                    onClick={() => !showResult && handleOptionSelect(optionLabel)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                      showCorrect
                        ? "border-green-500 bg-green-50 dark:bg-green-950"
                        : showIncorrect
                        ? "border-red-500 bg-red-50 dark:bg-red-950"
                        : isSelected
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50 hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                            showCorrect
                              ? "bg-green-500 text-white"
                              : showIncorrect
                              ? "bg-red-500 text-white"
                              : isSelected
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {optionLabel}
                        </div>
                        <span className="text-sm">{option}</span>
                      </div>
                      {showCorrect && (
                        <Badge variant="default" className="bg-green-500">
                          Correct
                        </Badge>
                      )}
                      {showIncorrect && (
                        <Badge variant="destructive">Incorrect</Badge>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Answer Reveal */}
            {showResult && (
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-medium text-blue-800 dark:text-blue-200">
                    Correct Answer:
                  </span>
                  <Badge variant="secondary">{flashcard.correctAnswer}</Badge>
                </div>
                {flashcard.explanation && (
                  <p className="text-sm text-blue-700 dark:text-blue-300 mt-2">
                    {flashcard.explanation}
                  </p>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Navigation Controls */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          <Button variant="outline" onClick={handleReset}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
        </div>

        <Button
          onClick={handleNext}
          disabled={currentIndex === total - 1}
        >
          Next
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}