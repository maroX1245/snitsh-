"use client";

import { useState, useEffect, useMemo } from "react";
import { FlashcardComponent } from "@/components/flashcard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, BookOpen, Shuffle, Play, Pause } from "lucide-react";
import { flashcards, categories, examSets, Flashcard } from "@/data/flashcards";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedExamSet, setSelectedExamSet] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [bookmarkedCards, setBookmarkedCards] = useState<Set<number>>(new Set());
  const [isStudyMode, setIsStudyMode] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [studiedCards, setStudiedCards] = useState<Set<number>>(new Set());
  const [correctAnswers, setCorrectAnswers] = useState<Set<number>>(new Set());

  const filteredFlashcards = useMemo(() => {
    return flashcards.filter((card) => {
      const matchesCategory = selectedCategory === "All" || card.category === selectedCategory;
      const matchesExamSet = selectedExamSet === "All" || card.examSet === selectedExamSet;
      const matchesSearch = searchTerm === "" || 
        card.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.options.some(option => option.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesCategory && matchesExamSet && matchesSearch;
    });
  }, [selectedCategory, selectedExamSet, searchTerm]);

  const currentCard = filteredFlashcards[currentIndex];

  const toggleBookmark = (cardId: number) => {
    setBookmarkedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  const handleNext = () => {
    if (currentIndex < filteredFlashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
  };

  const handleShuffle = () => {
    setCurrentIndex(Math.floor(Math.random() * filteredFlashcards.length));
  };

  const toggleStudyMode = () => {
    setIsStudyMode(!isStudyMode);
    if (!isStudyMode) {
      setStudiedCards(new Set());
      setCorrectAnswers(new Set());
    }
  };

  const markCardStudied = (cardId: number, isCorrect: boolean) => {
    setStudiedCards(prev => new Set(prev).add(cardId));
    if (isCorrect) {
      setCorrectAnswers(prev => new Set(prev).add(cardId));
    }
  };

  const stats = useMemo(() => {
    const totalStudied = studiedCards.size;
    const totalCorrect = correctAnswers.size;
    const accuracy = totalStudied > 0 ? Math.round((totalCorrect / totalStudied) * 100) : 0;
    
    return {
      totalCards: filteredFlashcards.length,
      totalStudied,
      totalCorrect,
      accuracy,
      bookmarked: bookmarkedCards.size
    };
  }, [studiedCards, correctAnswers, bookmarkedCards, filteredFlashcards.length]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory, selectedExamSet, searchTerm]);

  if (!currentCard) {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold mb-4">Gynecology Flashcards</h1>
            <p className="text-muted-foreground mb-8">
              No flashcards found matching your criteria.
            </p>
            <Button onClick={() => {
              setSelectedCategory("All");
              setSelectedExamSet("All");
              setSearchTerm("");
            }}>
              Reset Filters
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Gynecology Flashcards</h1>
          <p className="text-muted-foreground">
            Study for your exams with {flashcards.length} MCQ questions from past exams
          </p>
        </div>

        {/* Filters */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedExamSet} onValueChange={setSelectedExamSet}>
                <SelectTrigger>
                  <SelectValue placeholder="Select exam set" />
                </SelectTrigger>
                <SelectContent>
                  {examSets.map((examSet) => (
                    <SelectItem key={examSet} value={examSet}>
                      {examSet}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="flex gap-2">
                <Button
                  variant={isStudyMode ? "default" : "outline"}
                  onClick={toggleStudyMode}
                  className="flex-1"
                >
                  {isStudyMode ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                  {isStudyMode ? "Study Mode" : "Normal Mode"}
                </Button>
                <Button variant="outline" onClick={handleShuffle}>
                  <Shuffle className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold">{stats.totalCards}</div>
              <div className="text-sm text-muted-foreground">Total Cards</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold">{stats.totalStudied}</div>
              <div className="text-sm text-muted-foreground">Studied</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{stats.totalCorrect}</div>
              <div className="text-sm text-muted-foreground">Correct</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold">{stats.accuracy}%</div>
              <div className="text-sm text-muted-foreground">Accuracy</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold">{stats.bookmarked}</div>
              <div className="text-sm text-muted-foreground">Bookmarked</div>
            </CardContent>
          </Card>
        </div>

        {/* Flashcard */}
        <FlashcardComponent
          flashcard={currentCard}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onReset={handleReset}
          currentIndex={currentIndex}
          total={filteredFlashcards.length}
          isBookmarked={bookmarkedCards.has(currentCard.id)}
          onToggleBookmark={() => toggleBookmark(currentCard.id)}
          showAnswer={false}
          onToggleAnswer={() => {}}
        />

        {/* Quick Actions */}
        <div className="flex justify-center gap-4">
          <Button
            variant="outline"
            onClick={() => {
              const bookmarkedArray = Array.from(bookmarkedCards);
              if (bookmarkedArray.length > 0) {
                const bookmarkedFlashcards = flashcards.filter(card => bookmarkedCards.has(card.id));
                const randomIndex = Math.floor(Math.random() * bookmarkedFlashcards.length);
                const randomCard = bookmarkedFlashcards[randomIndex];
                const newIndex = filteredFlashcards.findIndex(card => card.id === randomCard.id);
                if (newIndex !== -1) {
                  setCurrentIndex(newIndex);
                }
              }
            }}
            disabled={bookmarkedCards.size === 0}
          >
            <BookOpen className="h-4 w-4 mr-2" />
            Study Bookmarked ({bookmarkedCards.size})
          </Button>
        </div>
      </div>
    </div>
  );
}