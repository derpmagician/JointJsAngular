import { Component, OnInit, AfterViewInit, ElementRef, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as joint from 'jointjs';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-graph',
  standalone: true,
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements AfterViewInit {
  constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeGraph();
    }
  }

  initializeGraph() {
    const namespace = joint.shapes;
    const graph = new joint.dia.Graph({}, { cellNamespace: namespace });
    const paperElement = this.renderer.selectRootElement('#myPaper');

    const paper = new joint.dia.Paper({
      el: paperElement,
      model: graph,
      width: 600,
      height: 400,
      drawGrid: true,
      background: {
        color: 'rgba(200, 200, 200, 1.0)'
      },
      gridSize: 1,
      cellViewNamespace: namespace
    });

    const rect1 = new joint.shapes.standard.Rectangle();
    rect1.position(100, 100);
    rect1.resize(100, 40);
    rect1.attr({
      body: {
        fill: 'white'
      },
      label: {
        text: 'Hola',
        fill: 'black'
      }
    });

    const rect2 = new joint.shapes.standard.Rectangle();
    rect2.position(300, 100);
    rect2.resize(100, 40);
    rect2.attr({
      body: {
        fill: 'white'
      },
      label: {
        text: 'Mundo',
        fill: 'black'
      }
    });

    const link = new joint.shapes.standard.Link();
    link.source(rect1);
    link.target(rect2);

    graph.addCells([rect1, rect2, link]);
  }
}
